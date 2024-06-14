"use client";
import "./style.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "../animations/animations";
import { useState } from "react";
import BaseButton from "../components/ui/button/BaseButton";
import Link from "next/link";
import data from "@/data/partnersPage.json";

export default function Home() {
  const [activePopup, setActivePopup] = useState<number>(0);
  const [isOpoen, setIsOpoen] = useState(false);
  //   const data = [1, 2, 3, 4, 5, 6, 67, 7, 8, 8, 9, 99, 9, 8, 9, 9, 4];
  const handlePopupClick = (event: any) => {
    event.stopPropagation();
  };
  return (
    <main className="forPartners">
      <motion.div
        className="decor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          alt=""
          className="decor1"
          src={"/decor/Ellipse3.png"}
          width={372}
          height={725}
        />
        <Image
          alt=""
          className="decor2"
          src={"/decor/Ellipse.png"}
          width={372}
          height={725}
        />
        <Image
          alt=""
          className="decor3"
          src={"/decor/Ellipse.png"}
          width={372}
          height={725}
        />
      </motion.div>
      <div className="Partnerscontent">
        <motion.h1
          variants={opacityAnimation}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true }}
          custom={2}
        >
          {data.headingOFPage}
        </motion.h1>
        <motion.p
          variants={opacityAnimation}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true }}
          custom={3}
        >
          {data.text}
        </motion.p>
      </div>
      <AnimatePresence>
        {isOpoen ? (
          <motion.div
            className="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpoen(false)}
          >
            <motion.div
              className="popupBody"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ damping: 0, duration: 0.2 }}
              onClick={handlePopupClick}
            >
              <div
                className="closeBUtton"
                onClick={() => setIsOpoen(false)}
              ></div>
              <h4 className="popup__heading">
                {data.IconsAndData[activePopup]?.data.heading}
              </h4>
              <p className="text">
                {data.IconsAndData[activePopup]?.data.text}
              </p>
              <Link
                href={data.IconsAndData[activePopup]?.data.link}
                target="_blank"
              >
                <BaseButton>
                  Visit preview{" "}
                  <Image
                    alt=""
                    src={"/icons/arrow.svg"}
                    width={14}
                    height={14}
                  />
                </BaseButton>
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="images">
        {data.IconsAndData.map((el, i) => (
          <motion.div
            onClick={() => {
              setActivePopup(i), setIsOpoen(true);
            }}
            className="imageWraper"
            variants={opacityAnimation}
            initial={"start"}
            whileInView={"end"}
            viewport={{ once: true }}
            custom={1 + i * 0.2}
          >
            <div className="bg"></div>
            <div className="image">
              <Image alt="" src={el.icon} width={200} height={200} />
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
