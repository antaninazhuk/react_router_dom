import axios from "axios";

export async function getUserById(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response.data;
    } catch(error) {
        console.error(error);
    }
}