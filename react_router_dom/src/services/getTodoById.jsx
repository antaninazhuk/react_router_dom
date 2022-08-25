import axios from "axios";

export async function getTodoById(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return response.data;
    } catch(error) {
        console.error(error);
    }
}