"use client";
import React from "react";
import Acardeon from "../../ui/acardeon/Acardeon";
import Heading from "../../text/Heading";
import "./style.scss";
import MHeading from "../../text/MHeading";
import { wakeAnimation } from "@/app/animations/animations";
import data from "@/data/FAQ.json";

const FaqSection = () => {
  return (
    <section className="faq">
      <MHeading
        variants={wakeAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
        custom={1.3}
      >
        {data.headingOFSection}
      </MHeading>
      <Acardeon data={data.listOfQuestions} />
    </section>
  );
};

export default FaqSection;
