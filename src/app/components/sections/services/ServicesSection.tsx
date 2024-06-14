"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";
import MHeading from "../../text/MHeading";
import { motion } from "framer-motion";
import { wakeAnimation, wakeAnimationTop } from "@/app/animations/animations";
import data from "@/data/ourServices.json";

const ServicesSection = () => {
  return (
    <section className="services" id="Services">
      <Image
        className="decor"
        alt=""
        src={"/decor/Ellipse.png"}
        width={372}
        height={725}
      />
      <MHeading
        variants={wakeAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
        custom={1}
      >
        {data.headingOFSection}
      </MHeading>
      <div className="services__cards">
        {data.list.map((el, i) => {
          return (
            <motion.div
              className="services__card servicesCard"
              key={i}
              variants={wakeAnimationTop}
              style={{ position: "relative" }}
              initial={"start"}
              whileInView={"end"}
              viewport={{ once: true }}
              custom={i}
            >
              <div className="servicesCardWraper">
                <Image alt="" src={el.image} width={74} height={74} />
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

export default ServicesSection;
