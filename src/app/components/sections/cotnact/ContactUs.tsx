"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Heading from "../../text/Heading";
import BaseButton from "../../ui/button/BaseButton";
import Image from "next/image";
import MHeading from "../../text/MHeading";
import { opacityAnimation, wakeAnimation } from "@/app/animations/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import data from "@/data/ContactUs.json";
import formRequest from "@/services/contactFrom";
import { useForm } from "react-hook-form";
interface IContactForm {
  Name: string;
  Email: string;
  Masage: string;
}

const ContactUs = () => {
  const ref = useRef<any>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactForm>({ mode: "onSubmit" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center end"],
  });

  // Reference to the path element
  const pathRef = useRef<SVGPathElement>(null);

  // Path length (calculated dynamically based on the path's total length)
  const [pathLength, setPathLength] = useState(0);

  // Calculate the path length on component mount
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Calculate strokeDashoffset as a function of the scroll progress
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1], // Scroll progress from 0 to 1 (0% to 100%)
    [0, pathLength] // Offset range from full path length to 0
  );

  // Use a spring for smoother animation
  const springOffset = useSpring(strokeDashoffset, {
    damping: 20,
    stiffness: 100,
  });

  const sendcontacts = async (data: any) => {
    const FData = new FormData();
    FData.append("email", data.Email);
    FData.append("masage", data.Masage);
    FData.append("name", data.Name);
    formRequest.SendContactForm(FData);
    reset();
  };
  return (
    <section className="contactUs" id="contactUs" ref={ref}>
      <svg
        className="Decor2"
        width="991"
        height="1822"
        viewBox="0 0 991 1822"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          ref={pathRef}
          d="M1044.58 84.0577C530.56 218.044 618.695 358.66 618.695 358.66C618.695 358.66 653.78 440.381 753.366 440.889C852.951 441.398 889.359 283.057 790.999 185.446C736.284 131.148 706.186 113.255 608.43 112.339C522.989 111.539 394.231 157.702 396.049 329.822C397.867 501.943 486.78 658.14 668.965 584.551C851.15 510.963 1040.39 382.779 900.603 224.07C760.818 65.3619 610.406 -26.8133 438.862 11.3626C293.583 43.6932 -144.149 76.9381 53.0225 766.196C210.76 1317.6 1037.14 1697.62 1430.61 1818.7"
          stroke="#191919"
          strokeWidth="5"
          strokeDasharray={pathLength} // Set the dash array to the path length
          strokeDashoffset={springOffset} // Bind the dash offset to the spring offset
        />
      </svg>
      <MHeading
        variants={wakeAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
        custom={1.3}
      >
        {data.Heading}
      </MHeading>
      <motion.div
        variants={opacityAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
      >
        <Image
          className="decor"
          alt=""
          src={"/decor/Ellipse.png"}
          width={372}
          height={725}
        />
      </motion.div>
      <div className="contactUs__content">
        <motion.p
          className="contactUs__text"
          variants={wakeAnimation}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true }}
          custom={1.3}
        >
          {data.Text}
        </motion.p>
        <motion.form
          onSubmit={handleSubmit(sendcontacts)}
          className="contactUs__form"
          variants={wakeAnimation}
          initial={"start"}
          whileInView={"end"}
          viewport={{ once: true }}
          custom={2}
        >
          <div className="inpoutDecor">
            <input
              type="text"
              placeholder="Email"
              {...register("Email", {
                required: true,
                validate: (value: string) => {
                  const regexString = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  const regex = new RegExp(regexString);
                  if (!regex.test(value)) {
                    return "Incorrect email";
                  }
                },
              })}
            />
          </div>
          <div className="inpoutDecor">
            <input
              type="text"
              placeholder="Name"
              {...register("Name", {
                minLength: { message: "minimum name length 3", value: 3 },
              })}
            />
          </div>
          <div className="contactUs__textarea">
            <textarea
              placeholder="Your Masage"
              rows={5}
              {...register("Masage", {
                minLength: { message: "minimum masage length 3", value: 3 },
              })}
            ></textarea>
          </div>
          {errors?.Email?.message ||
          errors?.Masage?.message ||
          errors?.Name?.message ? (
            <div className="errors">
              <span>{errors?.Email?.message}</span>
              <span>{errors?.Masage?.message}</span>
              <span>{errors?.Name?.message}</span>
            </div>
          ) : null}

          <BaseButton>
            Contact Us{" "}
            <Image alt="" src={"/icons/arrow.svg"} width={14} height={14} />
          </BaseButton>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
