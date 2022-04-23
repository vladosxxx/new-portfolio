import React from "react";

//@ts-ignore
interface IProps {
  text: string;
  textColor?: string;
  textHover?: string;
  buttonHover?: string;
}
const ButtonMain = ({
  text,
  textColor = "text-gray-500",
  textHover = "hover:text-gray-900",
  buttonHover = "hover:bg-slate-100",
}: IProps) => {
  return (
    <a
      className={`${buttonHover} text-white font-bold py-4 px-6 rounded-full`}
      href="next/link"
    >
      <span
        // key={item.name}
        className={`font-medium ${textColor} ${textHover}`}
      >
        {text}
      </span>
    </a>
  );
};
export default ButtonMain;
