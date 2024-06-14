"use client";
import React, { useRef } from "react";
import "./style.scss";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  text: string[];
  baseVelocity: number;
}
import data from "@/data/ParalaxLine.json";

function ParallaxText({ baseVelocity = 100, text }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`parallax ${baseVelocity > 0 ? "" : "inverted"}`}>
      <motion.div className="scroller" style={{ x }}>
        {text.map((el, i) => (
          <span key={i}>
            {el}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1904 0.603952L24.9757 15.3284L39.7095 20.0848L24.985 24.8701L20.2286 39.6039L15.4433 24.8795L0.709525 20.123L15.434 15.3378L20.1904 0.603952Z"
                fill="#FCEB57"
              />
            </svg>
          </span>
        ))}
        {text.map((el, i) => (
          <span key={i}>
            {el}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1904 0.603952L24.9757 15.3284L39.7095 20.0848L24.985 24.8701L20.2286 39.6039L15.4433 24.8795L0.709525 20.123L15.434 15.3378L20.1904 0.603952Z"
                fill="#FCEB57"
              />
            </svg>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
const ParalaxLine = () => {
  return (
    <div className="lineContainer">
      <div className="firstRow">
        <ParallaxText baseVelocity={2} text={data.firstLine} />
      </div>
      <div className="secondRow">
        <ParallaxText baseVelocity={-2} text={data.secondLine} />
      </div>
    </div>
  );
};

export default ParalaxLine;
