import type { NextApiRequest, NextApiResponse } from 'next'
import {Db, MongoClient} from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const client: MongoClient = await clientPromise
  const db: Db = client.db('portfolio')
  let data = await db.collection('data').findOne({data: "main"});
  res.status(200).json(data)
}
