import axios from "axios";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET (
    request: Request
)  {
    // const query = request.query.q;
    // const response = await axios.get(`https://duckduckgo.com/q=${query}&format=json`);

    return NextResponse.json({ message: "works" })
}