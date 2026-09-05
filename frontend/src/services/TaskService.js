import api from "../utils/axios";

const getTasks = () => api.get("/tasks");

const addTask = (task) => api.post("/tasks", task);

const updateTask = (id, task) => api.patch(`/tasks/${id}`, task);

const deleteTask = (id) => api.delete(`/tasks/${id}`);

export { getTasks, addTask, updateTask, deleteTask };
