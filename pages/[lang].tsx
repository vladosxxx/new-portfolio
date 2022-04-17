import type { NextPage } from 'next'
import {apiGetMain, mainHost} from "../constants/urls";
import Main from "./index";

const Home: NextPage<any> = ({list, p}) => {
    console.log(p)
    console.log("Data",list)

    return (
        <Main />
    )
}
export default Home

// @ts-ignore
export async function getServerSideProps({ params }) {
    try {
        const res = await fetch(mainHost + apiGetMain + params.lang)
        const data = await res.json()
        return {
            props: { isConnected: true, list: data, p: params},
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}
