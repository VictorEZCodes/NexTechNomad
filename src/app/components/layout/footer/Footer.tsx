import React from "react";
import "./style.scss";
import Image from "next/image";
import data from "@/data/footer.json";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__heading">{data.headingOFFooter}</h3>
      <p className="footer__text">{data.text}</p>
      <span className="footer__info">
        <a href={`mailto:${data.email}`}>{data.email}</a>
        <Image alt="" src={"/logoB.png"} width={66} height={66} />
      </span>

      <div className="footer__socials">
        {data.socials.map((el) => (
          <a href={el.Link}>
            <Image alt="" src={el.image} width={30} height={30} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
