import styles from './TasksInfo.module.css';

interface TasksInfoProps {
    totalTasks: number;
    tasksCompleted: number;
}

export function TasksInfo({ totalTasks, tasksCompleted }: TasksInfoProps) {
    const counterInfo = totalTasks ? `${ tasksCompleted } de ${ totalTasks }` : totalTasks

    return (
        <div className={ styles.info }>
            <span className={ styles.tasksCreated }>
                Tarefas criadas{ ' ' }
                <span className={ styles.counter }>{ totalTasks }</span>
            </span>

            <span className={ styles.tasksCompleted }>
                Concluídas{ ' ' }
                <span className={ styles.counter }>{ counterInfo }</span>
            </span>
        </div>
    );
}