import { useEffect, useState } from "react";
import "./styles/styles.css";

import { getTasks } from "./services/api";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {

    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    // Filters
    const [statusFilter, setStatusFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");

    // Sorting
    const [sortBy, setSortBy] = useState("dueDate");

    // Load Tasks
    const loadTasks = async () => {
        try {

            const response = await getTasks(
                statusFilter || undefined,
                priorityFilter || undefined,
                sortBy
            );

            setTasks(response.data.content);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadTasks();
    }, [statusFilter, priorityFilter, sortBy]);

    return (
        <div className="container">

            <h1>Task Tracker</h1>

            <TaskForm
                refreshTasks={loadTasks}
                editingTask={editingTask}
                clearEditing={() => setEditingTask(null)}
            />

            <FilterBar
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            <TaskList
                tasks={tasks}
                refreshTasks={loadTasks}
                setEditingTask={setEditingTask}
            />

        </div>
    );
}

export default App;