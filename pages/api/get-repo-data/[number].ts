import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let apiResponse = await axios.get("https://api.github.com/users/cameronraw/repos");

    let repos = await apiResponse.data;

    repos.sort((a: any, b: any) => new Date(b["updated_at"]).getTime() - new Date(a["updated_at"]).getTime());

    console.log(repos.length);

    repos = repos.slice(0, req.query.number);

    res.send(repos);

}
