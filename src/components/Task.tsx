import { InputHTMLAttributes } from "react";
import { Circle, CheckCircle, Trash } from "phosphor-react";

import styles from './Task.module.css';

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    isDone: boolean;
    onCompleteTask: () => void;
    onDeleteTask: () => void;
}

export function Task({ text, isDone, onCompleteTask, onDeleteTask }: TaskProps) {
    let checkIcon: JSX.Element;

    if (isDone) {
        checkIcon = <CheckCircle
            onClick={ onCompleteTask }
            size={ 24 }
            weight="fill"
            className={ styles.checkboxChecked }
        />;
    } else {
        checkIcon = <Circle
            onClick={ onCompleteTask }
            size={ 24 }
            className={ styles.checkboxUnchecked }
        />;
    }

    return (
        <div className={ `${styles.container} ${ isDone && styles.taskDone }` }>
            <div className={ styles.content }>
                { checkIcon }

                <span className={ styles.text }>
                    { text }
                </span>
            </div>

            <Trash
                size={ 24 }
                weight="bold"
                className={ styles.trash }
                onClick={ onDeleteTask }
            />
        </div>
    );
}