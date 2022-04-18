import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import clientPromise from '../lib/mongodb';
import {Db, InferIdType, MongoClient} from "mongodb";
import {apiGetMain, mainHost} from "../constants/urls";
import {useRouter} from "next/router";
import {useState} from "react";
import Home from "./home";



const Main: NextPage<any> = ({list, p}) => {
  console.log(p)
  const router = useRouter()
  const [lang, setLang] = useState('en')
  console.log("Data",list)

  return (
    <div className={styles.container}>
        <Home />
    </div>
  )
}

export default Main

// @ts-ignore
export async function getServerSideProps() {
  try {
    const res = await fetch(mainHost + apiGetMain)
    const data = await res.json()
    return {
      props: { isConnected: true, list: data},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
