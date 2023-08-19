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
    try {
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
    } catch {
        return NextResponse.json({ message: "error", results: JSON.stringify([
            {
                link: "https://v2.talkium.in/",
                title: "Talkium - Chat and hangout with friends!",
                snippet: "Chat and hangout with friends! Made with ❤️ by GlitchieTheDev."
            },
            {
                link: "https://v3.talkium.in/",
                title: "Talkium // Your instant messaging solution",
                snippet: "Talkium, by GlitchieTheDev, is a free instant messaging service offering secure, cross-platform communication for private and group text-based chats, connecting people worldwide with ease."
            },
            {
                link: "https://talkium.in/",
                title: "Talkium LTS",
                snippet: "This link ensures that you will visit the latest version of Talkium."
            },
            {
                link: "https://glitchiethedev.com/",
                title: "GlitchieTheDev's website",
                snippet: "Check out my website while you are rate limitted."
            }
        ]) })
    }
}
