"use client";
import React from "react";
import "./style.scss";
import Heading from "../../text/Heading";
import Image from "next/image";
import MHeading from "../../text/MHeading";
import { wakeAnimation, wakeAnimationTop } from "@/app/animations/animations";
import { motion } from "framer-motion";
import data from "@/data/ourFeatures.json";

const FeturesSection = () => {
  return (
    <section className="features" id="Features">
      <Image
        className="Decor1"
        alt=""
        src={"/decor/stars.png"}
        width={180}
        height={410}
      />

      <MHeading
        variants={wakeAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
        custom={1.3}
      >
        {data.headingOFSection}
      </MHeading>
      <div className="features__cards">
        {data.list.map((el, i) => {
          return (
            <motion.div
              className="features__card featuresCard"
              key={i}
              variants={wakeAnimationTop}
              style={{ position: "relative" }}
              initial={"start"}
              whileInView={"end"}
              viewport={{ once: true }}
              custom={i}
            >
              <div className="featuresCard__wraper">
                <div className="featuresCard__image_wraper">
                  <div className="featuresCard__image">
                    <Image alt="" src={el.image} width={58} height={58} />
                  </div>
                </div>
                <h4>{el.heading}</h4>
                <p>{el.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeturesSection;
