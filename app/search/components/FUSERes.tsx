import Image from "next/image";

interface FUSEResProps {
    href: string;
    icon?: string;
    title: string;
    desc: string;
};

const FUSERes: React.FC<FUSEResProps> = ({ href, icon, title, desc }) => {
    return (
        <a href={href} className="w-full h-full flex flex-col gap-1">
            <div className="flex gap-1">
                <Image width={32} height={32} src={icon || `/defaults/ricon.svg`} alt="" />
                <div className="w-full flex flex-col">  
                    <span className="font-bold">{title}</span>
                    <span className="italic">{href}</span>
                </div>
            </div>
            {desc}
        </a>
    );
};

export default FUSERes;