import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

import styles from './CreateButton.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton({ ...props }: ButtonProps) {
    return (
        <button className={ styles.button } { ...props } >
            Criar
            <PlusCircle size={ 16 } weight="bold" />
        </button>
    );
}