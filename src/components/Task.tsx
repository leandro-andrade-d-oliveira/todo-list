import { InputHTMLAttributes } from "react";

import styles from './Task.module.css';

import Checked from "@assets/checked.svg";
import Unchecked from "@assets/unchecked.svg";
import Trash from "@assets/trash.svg";

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    isDone: boolean;
    onCompleteTask: () => void;
    onDeleteTask: () => void;
}

export function Task({ text, isDone, onCompleteTask, onDeleteTask }: TaskProps) {
    let checkIcon: JSX.Element;
    let checkStyle: string;

    if (isDone) {
        checkIcon = <Checked />;
        checkStyle = styles.checkboxChecked;
    } else {
        checkIcon = <Unchecked />;
        checkStyle = styles.checkboxUnchecked;
    }

    return (
        <div className={ `${styles.container} ${ isDone && styles.taskDone }` }>
            <div className={ styles.content }>
                <div className={ checkStyle } onClick={ onCompleteTask }>
                    { checkIcon }
                </div>

                <span className={ styles.text }>
                    { text }
                </span>
            </div>

            <div className={ styles.trash } onClick={ onDeleteTask }>
                <Trash />
            </div>
        </div>
    );
}