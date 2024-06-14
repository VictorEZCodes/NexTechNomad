"use client";
import React, { useState } from "react";
import "./style.scss";
import AccordionItem from "./AccordionItem";
const Acardeon = ({
  data,
}: {
  data: {
    heading: string;
    text: string;
  }[];
}) => {
  const [openId, setId] = useState<number | null>(null);
  return (
    <ul className="accordion">
      {data.map((item, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            item={item}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default Acardeon;
