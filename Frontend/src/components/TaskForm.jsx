import { useState, useEffect } from "react";
import { createTask, updateTask } from "../services/api";

function TaskForm({ refreshTasks, editingTask, clearEditing }) {

    const initialState = {
        title: "",
        description: "",
        status: "TODO",
        priority: "MEDIUM",
        dueDate: "",
        projectId: 1
    };

    const [task, setTask] = useState(initialState);

    useEffect(() => {
        if (editingTask) {
            setTask({
                title: editingTask.title,
                description: editingTask.description,
                status: editingTask.status,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate,
                projectId: 1
            });
        } else {
            setTask(initialState);
        }
    }, [editingTask]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (editingTask) {
                await updateTask(editingTask.id, task);
                clearEditing();
            } else {
                await createTask(task);
            }

            setTask(initialState);
            refreshTasks();

        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    };

    return (

        <div className="task-form">

            <h2>
                {editingTask ? "Update Task" : "Create New Task"}
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={task.title}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Task Description"
                    value={task.description}
                    onChange={handleChange}
                />

                <div className="row">

                    <select
                        name="status"
                        value={task.status}
                        onChange={handleChange}
                    >
                        <option value="TODO">TODO</option>
                        <option value="DOING">DOING</option>
                        <option value="DONE">DONE</option>
                    </select>

                    <select
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                    >
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                    </select>

                    <input
                        type="date"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="button-group">

                    <button type="submit">

                        {editingTask
                            ? "Update Task"
                            : "Create Task"}

                    </button>

                    {editingTask && (

                        <button
                            type="button"
                            onClick={clearEditing}
                        >
                            Cancel
                        </button>

                    )}

                </div>

            </form>

        </div>

    );

}

export default TaskForm;