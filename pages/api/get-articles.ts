import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        let apiResponse = await axios.get(`${process.env.API_URL}articles`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.API_KEY}`
            }
        })

        let jsonResponse = await apiResponse.data

        console.log(jsonResponse)

        res.send(jsonResponse)
    } catch (e: any) {
        res.status(500)
    }
}
