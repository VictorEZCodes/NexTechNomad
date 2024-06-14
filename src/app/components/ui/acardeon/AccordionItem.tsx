import { fastWakeAnimation, wakeAnimation } from "@/app/animations/animations";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { motion } from "framer-motion";

interface IAccordionItem {
  item: { heading: string; text: string };
  onClick: () => void;
  isOpen: boolean;
}

const AccordionItem: FC<IAccordionItem> = ({ item, onClick, isOpen }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  return (
    <motion.li
      className="accordion-item"
      variants={wakeAnimation}
      initial={"start"}
      whileInView={"end"}
      viewport={{ once: true }}
      custom={1.3}
    >
      <div className={`accordion-header ${isOpen ? "active" : ""}`}>
        <div className="accordion-header_head" onClick={() => onClick()}>
          {item.heading}
          <div className={`accordion-arrow ${isOpen ? "active" : ""}`}>
            <div className="accordion-image">
              <Image alt="" src={"/icons/arrow2.svg"} fill />
            </div>
          </div>
        </div>

        <div
          className="accordion-collapse"
          style={
            isOpen
              ? { height: itemRef?.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="accordion-body" ref={itemRef}>
            {item.text}
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default AccordionItem;
