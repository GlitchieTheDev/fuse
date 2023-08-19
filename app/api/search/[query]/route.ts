import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface IParams {
    query: string;
}

export async function GET (
    request: Request,
    { params }: { params: IParams }
)  {
    const query = params.query;
    let response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.key}&cx=${process.env.cx}&q=${encodeURIComponent(query)}`);
    // let response = await axios.get(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
    // let response = await axios.get(`https://api.bing.com/v4.0/search?q=${encodeURIComponent(query)}&mkt=en-us`);
    response = response.data.items;
    console.log("//// SEARCH API ////")//, typeof(response))
    return NextResponse.json({message: "works", results: JSON.stringify(response)});
    // return NextResponse.json({ message: "works", results: `${Math.random()} ${JSON.stringify(response)}` })
}
