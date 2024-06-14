"use client";
import React from "react";
import "./style.scss";
import MHeading from "../../text/MHeading";
import { opacityAnimation, wakeAnimation } from "@/app/animations/animations";
import { motion } from "framer-motion";
import data from "@/data/customers.json";
import Image from "next/image";

const Customers = () => {
  return (
    <section className="cusomers">
      <Image
        className="Decor1"
        alt=""
        src={"/decor/star.png"}
        width={140}
        height={140}
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
      <div className="cusomersList">
        {data.listOfLogos.map((el, i) => (
          <motion.div
            key={i}
            className="cusomersList__image"
            variants={opacityAnimation}
            initial={"start"}
            whileInView={"end"}
            viewport={{ once: true }}
            custom={1.3 + i * 0.2}
          >
            <img alt="" src={el} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
