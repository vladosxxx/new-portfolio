import React from "react";

//@ts-ignore
interface IProps {
  text?: string;
  textColor?: string;
  textHover?: string;
  buttonHover?: string;
  styles?: string;
}
const ButtonMain = ({
  text,
  textColor,
  textHover,
  buttonHover,
  styles,
}: IProps) => {
  return (
    <a
      className={`${buttonHover} ${styles} ${textColor} ${textHover}`}
      href="next/link"
    >
      {text}
    </a>
  );
};
export default ButtonMain;
