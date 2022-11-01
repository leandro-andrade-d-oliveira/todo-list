import { ButtonHTMLAttributes } from "react";

import styles from './CreateButton.module.css';

import PlusCircle from "@assets/plusCircle.svg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton({ ...props }: ButtonProps) {
    return (
        <button className={ styles.button } { ...props } >
            Criar
            <PlusCircle />
        </button>
    );
}