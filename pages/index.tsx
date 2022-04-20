import type { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { apiGetMain, mainHost } from "../constants/urls";
import Home from "./home";
import contantLang from "../utils/lang";
import { IDataLang } from "../interfaces/interfaces";

const Main: NextPage<any> = ({ data, p }) => {
  console.log(p);
  const router = useRouter();
  const [content, setContent] = useState<IDataLang | undefined>();
  const [lang, setLang] = useState("en");
  console.log("DataN", content);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value);
    localStorage.setItem("vladosLang", event.target.value);
  };
  // @ts-ignore
  useEffect(() => {
    //@ts-ignore
    setContent(() =>
      localStorage.getItem("vladosLang") === "ua"
        ? contantLang("ua", data)
        : localStorage.getItem("vladosLang") === "ru"
        ? contantLang("ru", data)
        : contantLang("en", data)
    );
  }, [lang]);

  return (
    <div className={styles.container}>
      <Home handleChange={handleChange} lang={lang} content={content} />
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
