"use client";
import React from "react";
import BaseButton from "../../ui/button/BaseButton";
import Image from "next/image";
import "./style.scss";
import Heading from "../../text/Heading";
import { motion } from "framer-motion";
import { opacityAnimation, wakeAnimation } from "@/app/animations/animations";
import data from "@/data/aboutUS.json";

const AboutSection = () => {
  return (
    <section className="AboutSection" id="AboutUs">
      <motion.div
        className="decor"
        variants={opacityAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
      >
        <Image alt="" src={"/decor/Ellipse.png"} width={372} height={725} />
        <Image alt="" src={"/decor/Ellipse.png"} width={372} height={725} />
      </motion.div>
      <motion.div
        className="AboutSection__content"
        variants={wakeAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
        custom={1}
      >
        <Heading>{data.heading}</Heading>
        <div className="lineDecor"></div>
        <motion.p
          variants={wakeAnimation}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true }}
          custom={1.5}
        >
          {data.text}
        </motion.p>
        <motion.a
          href={"#contactUs"}
          variants={wakeAnimation}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true }}
          custom={2}
        >
          <BaseButton>
            Contact Us
            <Image alt="" src={"/icons/arrow.svg"} width={14} height={14} />
          </BaseButton>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutSection;
