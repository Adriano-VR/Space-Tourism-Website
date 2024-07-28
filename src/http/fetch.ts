import axios from "axios";

<<<<<<< HEAD
const url = "/data/data.json";//tem que deixar na pastas public

export async function obterDados() {
    const res = await axios.get(url);
    return await res.data;
=======
const url = "/data/data.json";

export async function obterDados() {
    const res = await axios.get(url);
    console.log(res.data);
    
    return await res.data;
   
  
>>>>>>> 163cacaeaad992275c765a5f7072d65b4eb0bbdd
}