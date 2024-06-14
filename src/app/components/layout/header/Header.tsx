"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import BaseButton from "../../ui/button/BaseButton";
import LinksList from "../nav/LinksList";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/data/header.json";

const Header = () => {
  const [butrgerOpen, setButrgerOpen] = useState(false);

  const [headerClass, setHeaderClass] = useState("");

  useLayoutEffect(() => {
    if (window.scrollY > 2) {
      setHeaderClass("active");
    } else {
      setHeaderClass("");
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setHeaderClass("active");
      } else {
        setHeaderClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`header ${headerClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
    >
      <div
        className={`burger ${butrgerOpen ? "active" : ""}`}
        onClick={() => setButrgerOpen((state) => !state)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Link href={"/#Main"} onClick={() => setButrgerOpen(false)}>
        <div className="logo">
          <Image alt="" src={"/logo.png"} fill />
        </div>
      </Link>

      <nav className={`${butrgerOpen ? "active" : ""}`}>
        <LinksList
          data={data.links}
          whenLinkCLiked={() => setButrgerOpen(false)}
        />
        <BaseButton>
          <Link href={"/#contactUs"} onClick={() => setButrgerOpen(false)}>
            Contact Us{" "}
            <Image alt="" src={"/icons/arrow.svg"} width={14} height={14} />
          </Link>
        </BaseButton>
      </nav>
    </motion.header>
  );
};

export default Header;
