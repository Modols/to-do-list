import React from "react";
import ToDo from "./ToDo"

const ToDoList = ({ task, match, onToggleCompleted }) => {

    let filteredTasks

    switch (match.params.filter) {
        case "completed":
            filteredTasks = task.filter(task => task.completed)
            break;

        default:
            filteredTasks = task
            break;
    }

    if (filteredTasks.length === 0) {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">Aucune tache completer.</li>
                </ul>
            </>
        )
    } else {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
                    }
                </ul>
            </>
        )
    }


}

export default ToDoList