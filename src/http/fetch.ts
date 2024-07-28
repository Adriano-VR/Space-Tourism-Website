import axios from "axios";

const url = "/data/data.json";//tem que deixar na pastas public

export async function obterDados() {
    const res = await axios.get(url);
    return await res.data;
}