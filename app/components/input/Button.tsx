import clsx from "clsx";

interface ButtonProps {
    children: any;
    style?: string;
    action?: any;
};

const Button: React.FC<ButtonProps> = ({ children, style, action }) => {
    style = style ? style : "primary"
    let cn = "";
    switch (style) {
        case "primary":
            cn = "bg-blue-500 text-white hover:bg-blue-400"
            break;
        case "secondary":
            cn = "bg-neutral-100 hover:bg-neutral-200"
            break;
    }
    return (
        <button onClick={action} className={clsx(cn, "px-4 py-2 rounded-md cursor-pointer")}>
            {children}
        </button>
    )
};

export default Button