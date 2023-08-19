"use client";

import Button from "../components/input/Button";
import Input from "../components/input/Input";
import { GoSearch } from "react-icons/go";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            query: ''
        }
    });

    let additionalParams = "";

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // router.push(`https://duckduckgo.com/?q=${encodeURIComponent(data.query)}&format=html`)
        router.push(`/search/?q=${encodeURIComponent(data.query) + additionalParams}`)
        // router.push(`https://duckduckgo.com/html/?q=${encodeURIComponent(data.query)}`)
    };

    const feelLucky = () => {
        additionalParams = "&lucky=true";
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="
                flex
                flex-col
                justify-center
                items-center
                w-full
                h-full
                gap-5
            "
        >
            <Image src="/fuse_banner.png" alt="FUSE" width={960} height={323} className="lg:w-5/12 md:w-3/12 sm:w-full" />
            <Input required register={register} errors={errors} id="query" placeholder="Search FUSE or type a URL" icon={GoSearch} />
            <div className="flex lg:justify-evenly lg:w-5/12 md:justify-evenly md:w-3/12  sm:w-full sm:justify-center">
                <Button>Search</Button>
                <Button style="secondary" action={feelLucky}>I am <b>NOT</b> feeling lucky</Button>
            </div>
        </form>
    )
};

export default Page;