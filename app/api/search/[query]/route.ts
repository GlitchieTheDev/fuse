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
    console.log("Start of SR");
    const query = params.query;
    console.log("SR: 1");
    let response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.key}&cx=${process.env.cx}&q=${encodeURIComponent(query)}`);
    // let response = await axios.get(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
    // let response = await axios.get(`https://api.bing.com/v4.0/search?q=${encodeURIComponent(query)}&mkt=en-us`);
    console.log("SR: 2");
    response = response.data.items;
    console.log("SR: 3");
    console.log("//// SEARCH API ////")//, typeof(response))
    console.log("SR: 4 - SUCCESS");
    return NextResponse.json({message: "works", results: JSON.stringify(response)});
    // return NextResponse.json({ message: "works", results: `${Math.random()} ${JSON.stringify(response)}` })
}
