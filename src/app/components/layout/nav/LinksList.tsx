import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";

interface ILinksList extends HTMLAttributes<HTMLUListElement> {
  cn?: string;
  whenLinkCLiked: () => void;
  data: {
    text: string;
    link: string;
  }[];
}

const LinksList: FC<ILinksList> = ({
  cn,
  children,
  whenLinkCLiked,
  data,
  ...props
}) => {
  let addClass = cn ? cn : "";
  return (
    <ul className={style.list + " " + addClass} {...props}>
      {data.map((el, i) => (
        <li className={style.li} key={i}>
          <Link href={el.link} onClick={whenLinkCLiked}>
            {el.text}
          </Link>
        </li>
      ))}

      {children}
    </ul>
  );
};

export default LinksList;
