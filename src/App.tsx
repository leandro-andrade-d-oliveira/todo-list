import '@styles/global.css';

import { Input } from "@components/Input";

export function App() {
    return (
        <div className="p-4">
            <Input
                placeholder="Adicione uma nova tarefa"
            />
        </div>
    );
}