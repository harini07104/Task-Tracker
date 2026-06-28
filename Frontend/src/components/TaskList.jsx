import { deleteTask } from "../services/api";

function TaskList({ tasks, refreshTasks, setEditingTask }) {

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this task?")) return;

        try {
            await deleteTask(id);
            refreshTasks();
        } catch (error) {
            console.error(error);
        }
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "DONE":
                return "status done";
            case "DOING":
                return "status doing";
            default:
                return "status todo";
        }
    };

    const getPriorityClass = (priority) => {
        switch (priority) {
            case "HIGH":
                return "priority high";
            case "MEDIUM":
                return "priority medium";
            default:
                return "priority low";
        }
    };

    return (

        <div className="task-list">

            <h2>Tasks</h2>

            {tasks.length === 0 ? (

                <p className="empty-message">
                    No Tasks Found
                </p>

            ) : (

                tasks.map((task) => (

                    <div
                        key={task.id}
                        className="task-card"
                    >

                        <div className="task-header">

                            <h3>{task.title}</h3>

                            <div className="task-badges">

                                <span className={getStatusClass(task.status)}>
                                    {task.status}
                                </span>

                                <span className={getPriorityClass(task.priority)}>
                                    {task.priority}
                                </span>

                            </div>

                        </div>

                        <p className="task-description">
                            {task.description || "No description provided."}
                        </p>

                        <div className="task-footer">

                            <div>

                                <p className="project-name">
                                    📁 {task.projectName}
                                </p>

                                <small>
                                    📅 {formatDate(task.dueDate)}
                                </small>

                            </div>

                            <div className="task-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() => setEditingTask(task)}
                                >
                                    ✏ Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(task.id)}
                                >
                                    🗑 Delete
                                </button>

                            </div>

                        </div>

                    </div>

                ))

            )}

        </div>

    );

}

export default TaskList;