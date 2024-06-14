import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import "./style.scss";

interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  cn?: string;
}

const BaseButton: FC<IBaseButton> = forwardRef(
  ({ children, cn, ...props }, ref: any) => {
    return (
      <button ref={ref} className={"BaseButton" + " " + cn} {...props}>
        {children}
      </button>
    );
  }
);

export default BaseButton;
