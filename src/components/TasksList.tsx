import styles from './TasksList.module.css';

import ListIcon from "@assets/list.svg";

import { Task } from "@components/Task";

interface ITask {
    id: string;
    isDone: boolean;
    text: string;
}

interface TasksListProps {
    tasks: ITask[];
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function TasksList({ tasks, onCompleteTask, onDeleteTask }: TasksListProps) {
    if (!tasks.length) {
        return (
            <div className={ styles.emptyList }>
                <ListIcon />

                <div className={ styles.emptyListInfo }>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
        );
    }

    return (
        <div className={ styles.tasks }>
            { tasks.map(({ id, isDone, text }) => (
                <Task
                    key={ id }
                    isDone={ isDone }
                    text={ text }
                    onCompleteTask={ onCompleteTask.bind(null, id) }
                    onDeleteTask={ onDeleteTask.bind(null, id) }
                />
            )) }
        </div>
    );
}