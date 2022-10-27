import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function CreateButton({ ...props }: ButtonProps) {
    return (
        <button
            className="flex items-center gap-2 bg-blue-dark text-gray-100 p-4 rounded-lg text-md hover:bg-blue transition-all ease-linear"
            { ...props }
        >
            Criar
            <PlusCircle size={ 16 } weight="bold" className="text-gray-100" />
        </button>
    );
}