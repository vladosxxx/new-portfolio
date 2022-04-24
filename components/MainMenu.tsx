import React from "react";
import { IMenu } from "../interfaces/interfaces";
import styles from "./MainMenu.module.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ButtonMain from "./ButtonMain";
import DropDown from "./DropDown";

interface IProp {
  menu: IMenu;
  lang: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MainMenu = ({ menu, lang, handleChange }: IProp) => {
  const { projects, contacts, resume, startups } = menu || {};
  console.log("manu", menu);
  return (
    <>
      <ButtonMain text={projects} />
      <ButtonMain text={resume} />
      <ButtonMain text={startups} />
      <ButtonMain text={contacts} />
      <ButtonMain
        text={"Log in"}
        textColor={"text-indigo-600"}
        textHover={"hover:text-indigo-500"}
        buttonHover={"hover:bg-indigo-200"}
      />
    </>
  );
};

export default MainMenu;
