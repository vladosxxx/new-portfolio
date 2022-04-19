import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import clientPromise from '../lib/mongodb';
import {Db, InferIdType, MongoClient} from "mongodb";
import {apiGetMain, mainHost} from "../constants/urls";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Home from "./home";
import contantLang from "../utils/lang";



const Main: NextPage<any> = ({data, p}) => {
  console.log(p)
  const router = useRouter()
  const [content, setContent] = useState()
  const [lang, setLang] = useState('en')
  console.log("DataN",content)
  // @ts-ignore
  useEffect( () => {
    // let a = contantLang('ua', data)
    // @ts-ignore

    setContent(() => contantLang('ua', data))
    // @ts-ignore
    // setContent(localStorage.getItem("vladosLang") === 'ua' ? contantLang('ua', data) : localStorage.getItem("vladosLang") === 'ru' ? contantLang('ru', data) : contantLang('en', data) )

  },[])
  return (
    <div className={styles.container}>
        <Home />
    </div>
  )
}

export default Main

export const getServerSideProps: GetServerSideProps = async(context) => {
  try {
    const res = await fetch(mainHost + apiGetMain)
    const data = await res.json()
    return {
      props: { isConnected: true, data},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
