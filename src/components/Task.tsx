import { InputHTMLAttributes } from "react";
import { Circle, CheckCircle, Trash } from "phosphor-react";
import clsx from "clsx";

const animation = "transition-all ease-linear duration-500";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    done: boolean;
    onCompleteTask: () => void;
}

export function Task({ text, done, onCompleteTask }: InputProps) {
    let checkIcon: JSX.Element;
    let textClassName: string;

    if (done) {
        checkIcon = <CheckCircle
            onClick={ onCompleteTask }
            size={ 24 }
            weight="fill"
            className={ clsx(animation, "text-purple-dark hover:text-purple flex-none cursor-pointer") }
        />;
        textClassName = "text-gray-300 line-through";
    } else {
        checkIcon = <Circle
            onClick={ onCompleteTask }
            size={ 24 }
            className={ clsx(animation, "text-blue hover:text-blue-dark flex-none cursor-pointer") }
        />;
        textClassName = "text-gray-100";
    }

    return (
        <div className="flex items-center justify-between p-4 rounded-lg w-full bg-gray-500">
            <div className="flex gap-3">
                { checkIcon }

                <span className={ clsx("text-md", animation, textClassName) }>
                    { text }
                </span>
            </div>

            <Trash size={ 24 } weight="bold" className="p-1 rounded text-gray-300 hover:text-danger hover:bg-gray-400 flex-none" />
        </div>
    );
}