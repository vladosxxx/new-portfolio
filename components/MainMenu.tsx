import React from "react";
import { IMenu } from "../interfaces/interfaces";
import styles from "./MainMenu.module.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ButtonMain from "./ButtonMain";
import DropDown from "./DropDown";

interface IProp {
  menu?: IMenu;
  lang: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  textColor: string;
  textHover: string;
  buttonHover: string;
  styles?: string;
}

const MainMenu = ({
  menu,
  lang,
  handleChange,
  textColor,
  textHover,
  buttonHover,
  styles,
}: IProp) => {
  const { projects, contacts, resume, startups } = menu || {};
  console.log("manu", menu);
  return (
    <>
      <ButtonMain
        text={projects}
        textColor={textColor}
        textHover={textHover}
        buttonHover={buttonHover}
        styles={styles}
      />
      <ButtonMain
        text={resume}
        textColor={textColor}
        textHover={textHover}
        buttonHover={buttonHover}
        styles={styles}
      />
      <ButtonMain
        text={startups}
        textColor={textColor}
        textHover={textHover}
        buttonHover={buttonHover}
        styles={styles}
      />
      <ButtonMain
        text={contacts}
        textColor={textColor}
        textHover={textHover}
        buttonHover={buttonHover}
        styles={styles}
      />
      {/*<ButtonMain*/}
      {/*  text={"Log in"}*/}
      {/*  textColor={"text-indigo-600"}*/}
      {/*  textHover={"hover:text-indigo-500"}*/}
      {/*  buttonHover={"hover:bg-indigo-200"}*/}
      {/*  styles={styles}*/}
      {/*/>*/}
    </>
  );
};

export default MainMenu;
