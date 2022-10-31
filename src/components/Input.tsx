import { InputHTMLAttributes } from "react";

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return (
        <div className={ styles.container }>
            <input type="text" className={ styles.input } { ...props } />
        </div>
    );
}