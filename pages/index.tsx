import type { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { apiGetMain, mainHost } from "../constants/urls";
import Home from "./home";
import contantLang from "../utils/lang";
import { IDataLang } from "../interfaces/interfaces";
import { language } from "../constants/data";
import DropDown from "../components/DropDown";

const Main: NextPage<any> = ({ data, p }) => {
  console.log(p);
  //@ts-ignore
  const [content, setContent] = useState<IDataLang>();
  const [lang, setLang] = useState(language[1].type);
  console.log("DataN", content);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value);
    localStorage.setItem("vladosLang", event.target.value);
  };
  // @ts-ignore
  useEffect(() => {
    //@ts-ignore
    setContent(() =>
      localStorage.getItem("vladosLang") === language[1].type
        ? contantLang(language[1].type, data)
        : localStorage.getItem("vladosLang") === language[2].type
        ? contantLang(language[2].type, data)
        : contantLang(language[0].type, data)
    );
  }, [lang]);

  return (
    <div className={styles.container}>
      <Home handleChange={handleChange} lang={lang} content={content} />
      <DropDown />
    </div>
  );
};

export default Main;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await fetch(mainHost + apiGetMain);
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
    };
  }
};
