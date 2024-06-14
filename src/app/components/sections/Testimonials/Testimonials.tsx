"use client";
import React from "react";
import Heading from "../../text/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "./style.scss";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MHeading from "../../text/MHeading";
import { motion } from "framer-motion";
import { opacityAnimation } from "@/app/animations/animations";

import data from "@/data/testimonials.json";
const Testimonials = () => {
  const pagination = {
    clickable: true,
    // @ts-ignore
    renderBullet: function (index, className) {
      return '<span class="pagination ' + className + '">' + "</span>";
    },
  };

  return (
    <section id="Testimonials" className="Testimonials">
      <Image
        className="Decor1"
        alt=""
        src={"/decor/star.png"}
        width={140}
        height={140}
      />
      <MHeading
        cn="heading"
        variants={opacityAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
        custom={1}
      >
        {data.headingOFSection}
      </MHeading>
      <motion.div
        variants={opacityAnimation}
        initial={"start"}
        whileInView={"end"}
        viewport={{ once: true }}
        custom={2}
      >
        <Swiper
          className="slider"
          spaceBetween={50}
          slidesPerView={1}
          pagination={pagination}
          modules={[Pagination]}
          //   navigation={true}
        >
          {data.Testimonials.map((el, i) => (
            <SwiperSlide className="slide" key={i}>
              <div className="row">
                {el.map((el, i) => (
                  <div className="item" key={i}>
                    <div className="Testimonials__wraper">
                      <p className="text">{el.testimonial}</p>
                      <div className="info">
                        <div className="Testimonials__image">
                          <Image alt="" src={"/user.png"} fill />
                        </div>
                        <div className="info__text">
                          <h5>{el.name}</h5>
                          <p>{el?.subText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
