import { ChangeEvent, FormEvent, useState } from "react";

import '@styles/global.css';

import Logo from '@assets/logo.svg';

import { Input } from "@components/Input";
import { CreateButton } from "@components/CreateButton";
import { Task } from "@components/Task";

interface ITask {
    id: string;
    isDone: boolean;
    text: string;
}

export function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [newTaskText, setNewTaskText] = useState("");

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        const newTask: ITask = {
            id: (new Date()).toISOString(),
            isDone: false,
            text: newTaskText,
        };

        setTasks(tasks => tasks.concat(newTask));
        setNewTaskText("");
    }

    function handleCompleteTask(id: string) {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex(task => task.id === id);

        newTasks[taskIndex].isDone = !newTasks[taskIndex].isDone;

        setTasks(newTasks);
    }

    function handleDeleteTask(id: string) {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex(task => task.id === id);

        newTasks.splice(taskIndex, 1);

        setTasks(newTasks);
    }

    const totalTasks = tasks.length;
    const tasksCompleted = tasks.reduce((acc, cur) => cur.isDone ? acc + 1 : acc, 0);

    return (
        <div className="bg-gray-600 h-screen w-screen px-88">
            <header className="bg-gray-700 flex pt-[72px] justify-center h-[200px]">
                <img src={ Logo } width={ 126 } height={ 48 } alt="Logotipo do Ignite" className="h-fit" />
            </header>

            <main className="mx-80 flex flex-col gap-16">
                <form className="flex gap-2 mt-[-25px]" onSubmit={ handleCreateNewTask }>
                    <Input placeholder="Adicione uma nova tarefa" value={ newTaskText } onChange={ handleNewTaskChange } required />
                    <CreateButton type="submit" />
                </form>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <span className="text-purple">Total de Tarefas: { totalTasks }</span>
                        <span  className="text-blue">Concluídas { tasksCompleted } de { totalTasks }</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        { tasks.map(({ id, isDone, text }) => (
                            <Task
                                key={ id }
                                isDone={ isDone }
                                text={ text }
                                onCompleteTask={ handleCompleteTask.bind(null, id) }
                                onDeleteTask={ handleDeleteTask.bind(null, id) }
                            />
                        )) }
                    </div>
                </div>
            </main>
        </div>
    );
}