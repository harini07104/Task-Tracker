import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Task APIs
export const getTasks = (status, priority, sortBy = "dueDate") =>
    API.get("/tasks", {
        params: {
            status,
            priority,
            sortBy
        }
    });

export const createTask = (task) => API.post("/tasks", task);

export const updateTask = (id, task) =>
    API.put(`/tasks/${id}`, task);

export const deleteTask = (id) =>
    API.delete(`/tasks/${id}`);

export default API;