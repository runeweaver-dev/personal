import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let apiResponse = await axios.get(`https://api.github.com/repos/cameronraw/${req.query.name}/commits`);

    let commits = await apiResponse.data;

    //commits.sort((a: any, b: any) => new Date(b["updated_at"]).getTime() - new Date(a["updated_at"]).getTime());

    res.send(commits);
}
