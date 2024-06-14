"use client";
import React from "react";
import "./style.scss";
import BaseButton from "../../ui/button/BaseButton";
import Image from "next/image";
import { motion } from "framer-motion";
import data from "@/data/firstSection.json";

const HeroSection = () => {
  return (
    <section className="HeroSection" id="Main">
      <svg
        width="336"
        height="179"
        className="HeroSection__decor_row"
        viewBox="0 0 336 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2.37402 -0.5C8.56456 98.5671 90.8729 177 191.5 177C250.853 177 303.833 149.713 338.579 107"
          stroke="white"
          strokeWidth="3"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
        />
      </svg>
      <svg
        width="100%"
        height="523"
        viewBox="0 0 1920 523"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="HeroSection__decor_line"
      >
        <motion.path
          d="M-2.5 369C923.5 -62 1780 270.5 1925 358"
          stroke="url(#paint0_linear_80_12)"
          strokeWidth="14"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_80_12"
            x1="-47.2314"
            y1="417.076"
            x2="2185.82"
            y2="-194.639"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.41" stopColor="#FCEB57" />
            <stop offset="0.69" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>

      <div className="HeroSection__text">
        {/* <Image
          className="HeroSection__decor_1"
          alt=""
          src={"/icons/star.svg"}
          width={64}
          height={64}
        /> */}
        {/* <Image
          className="HeroSection__decor_2"
          alt=""
          src={"/icons/star.svg"}
          width={103}
          height={103}
        /> */}
        <motion.svg
          className="HeroSection__decor_1"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.1, opacity: 0, rotate: 50 }}
          animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <path
            d="M32 0L39.8291 24.1709L64 32L39.8291 39.8291L32 64L24.1709 39.8291L0 32L24.1709 24.1709L32 0Z"
            fill="white"
          />
        </motion.svg>
        <motion.svg
          className="HeroSection__decor_2"
          width="103"
          height="103"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.1, opacity: 0, rotate: 50 }}
          animate={{ y: 0, opacity: 1, scale: 1, rotate: 80 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
        >
          <path
            d="M32 0L39.8291 24.1709L64 32L39.8291 39.8291L32 64L24.1709 39.8291L0 32L24.1709 24.1709L32 0Z"
            fill="white"
          />
        </motion.svg>

        <motion.h1
          className="heroText"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {data.bigText1}
          <span>{data.smalTextInMidle}</span> {data.bigText2}
        </motion.h1>
      </div>
      <motion.a
        href={"#AboutUs"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
      >
        <BaseButton cn="HeroSection__button">
          <span>About Us</span>
        </BaseButton>
      </motion.a>
    </section>
  );
};

export default HeroSection;

const AImaege = () => {
  return (
    <Image
      className="HeroSection__decor_2"
      alt=""
      src={"/icons/star.svg"}
      width={103}
      height={103}
    />
  );
};
const AImaege1 = () => {
  return (
    <Image
      className="HeroSection__decor_2"
      alt=""
      src={"/icons/star.svg"}
      width={103}
      height={103}
    />
  );
};
const AImaege2 = () => {
  return motion(AImaege);
};
const AImaege3 = () => {
  return motion(AImaege1);
};
