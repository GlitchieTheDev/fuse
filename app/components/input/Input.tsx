"use client";

import clsx from "clsx";
import { IconType } from "react-icons";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
    placeholder?: string;
    icon: IconType;
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
    required?: boolean;
};

const Input: React.FC<InputProps> = ({ placeholder, icon: Icon, id, register, errors, disabled, required }) => {
    return (
        <label htmlFor={id} className={clsx("relative block lg:w-5/12 md:w-3/12 sm:w-full")}>
            <Icon className="text-gray-400 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input
            id={id}
            type="text"
            className="
                        ring-2
                        ring-gray-400
                        p-2
                        rounded-md
                        border-0
                        outline-0
                        focus:ring-neutral-400
                        shadow-lg
                        w-full
                        block
                        pl-10
                        transition
                    "
            placeholder={placeholder}
            disabled={disabled}
            {...register(id, { required })}
        />
        </label>
    )
};

export default Input