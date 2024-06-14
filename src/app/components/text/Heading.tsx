import React, { FC, forwardRef, HTMLAttributes } from "react";
import style from "./heading.module.scss";
interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  cn?: string;
}

const Heading: FC<IHeading> = forwardRef(
  ({ children, cn, ...props }, ref: any) => {
    return (
      <h2 className={`${cn ? cn : ""} ${style.Heading}`} {...props} ref={ref}>
        {children}
      </h2>
    );
  }
);

export default Heading;
