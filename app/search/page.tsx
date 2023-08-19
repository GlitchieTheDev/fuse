"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import FUSERes from "./components/FUSERes";

const Page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get("q");
    const isLucky: boolean = searchParams.get("lucky") === "true";
    const [ results, setResults ] = useState<any | null>(null);
    const [ error, setError ] = useState<any | null>(null);
    let timeTaken__ST = Date.now();
    let timeTaken = "CALCULATING";

    useEffect(() => {
        if (!query) return router.push("/");
        if (!results && !error) {
            const fetchData = () => {
                axios.get(`/api/search/${encodeURIComponent(query)}`)
                    .then((response) => {
                        const rd: any = response.data.results;
                        setResults(rd);
                    })
                    .catch((error) => {
                        console.error("ERROR SEARCHING - CLIENT:", error);
                        setError("An error occured while searching.")
                    })
            }
    
            fetchData();
        }
    });

    if (!query) return router.push("/");

    if (error) {
        return router.push(`/search?q=${encodeURIComponent(query)}`)
    };
    
    timeTaken = (Date.now()).toString() + "ms";

    if (isLucky && Array.isArray(JSON.parse(results))) {
        router.push(JSON.parse(results)[0].link);
    }

    return (
        <>
            <h1>Query: {query}</h1>
            {/* <span>Time: {timeTaken}</span><br /> */}
            Results: <br />

            <div className="flex flex-col gap-5">
                {Array.isArray(JSON.parse(results)) ? JSON.parse(results).map((result: any) => {
                    return (
                        <FUSERes href={result.link} title={result.title} desc={result.snippet} key={JSON.parse(results).indexOf(result)}></FUSERes>
                    );
                }) : "Loading"}
            </div>
        </>
    )
};

export default Page;