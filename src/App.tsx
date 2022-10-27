import { useState } from "react";

import '@styles/global.css';

import { Task } from "@components/Task";

export function App() {
    const [isDone, setIsDone] = useState(false);

    function completeTask() {
        setIsDone(isDone => !isDone);
    }

    return (
        <div className="p-4">
            <Task
                text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
                done={ isDone }
                onCompleteTask={ completeTask }
            />
        </div>
    );
}