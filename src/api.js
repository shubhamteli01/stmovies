import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTIyYjk4NTQ1NWU1Y2RmNzE0NDNmNDcxNzU2MDlhNiIsInN1YiI6IjY1NDc5YWQzMjg2NmZhMDBmZWZmYzE1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HaoDc-2ISeQY75etaZWrp38RrDqIj8ZCqwCwmz1hMzw"
const BASE_URL = "https://api.themoviedb.org/3/"
const headers = {
    Authorization: "bearer " + token
}

export const fetchDataFromApi = async (url, params) => {
    console.log(url)
    try {
        const data = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data
    } catch (err) {
        console.log(err)
        return err;
    }
}