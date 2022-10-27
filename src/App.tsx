import '@styles/global.css';

import { CreateButton } from "@components/CreateButton";

export function App() {
    function createTask() {
        alert('Task created!');
    }

    return (
        <div className="p-4">
            <CreateButton onClick={ createTask } />
        </div>
    );
}