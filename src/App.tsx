import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

import '@styles/global.css';
import styles from './App.module.css';

import { Input } from "@components/Input";
import { CreateButton } from "@components/CreateButton";
import { Header } from "@components/Header";
import { TasksInfo } from "@components/TasksInfo";
import { TasksList } from "@components/TasksList";

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
            id: uuid(),
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
        <div className={ styles.container }>
            <Header />

            <main>
                <form className={ styles.form } onSubmit={ handleCreateNewTask }>
                    <Input placeholder="Adicione uma nova tarefa" value={ newTaskText } onChange={ handleNewTaskChange } required />
                    <CreateButton type="submit" />
                </form>

                <div className={ styles.todoList }>
                    <TasksInfo tasksCompleted={ tasksCompleted } totalTasks={ totalTasks } />
                    <TasksList tasks={tasks} onCompleteTask={ handleCompleteTask } onDeleteTask={ handleDeleteTask }/>
                </div>
            </main>
        </div>
    );
}