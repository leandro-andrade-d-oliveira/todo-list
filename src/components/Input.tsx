import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return (
        <div className="flex items-center p-4 rounded w-full bg-gray-500 focus-within:ring-1 ring-purple-dark">
            <input
                type="text"
                className="flex-1 bg-transparent outline-none text-gray-100 text-lg placeholder:text-gray-300"
                { ...props }
            />
        </div>
    );
}