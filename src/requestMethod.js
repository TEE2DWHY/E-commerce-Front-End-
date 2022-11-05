import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTVjOTY1NTQ1MDBjMWM3MzI3ZjdmMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzY0MDQzNiwiZXhwIjoxNjY3ODk5NjM2fQ.PjCn7YdhXU1uIb_TuKlCsfttCJ8OaY6n2IAI4VgUSfc"


//for fetching data we would just be using public request (since to fetch any product we don't have to be user or admin)
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})