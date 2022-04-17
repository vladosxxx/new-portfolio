// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Db, MongoClient} from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const {getMainData} = req.query
  const client: MongoClient = await clientPromise
  const db: Db = client.db('portfolio')
  let data = await db.collection('data').findOne({lang: getMainData});
  res.status(200).json(data)
  // res.status(200).json({ name: req.query.getMainData })
}
