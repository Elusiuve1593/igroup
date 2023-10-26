import axios from "axios";

const token = "nwvQ1ruVJn3txXHVvpTYluSHU2y1asIa"
export const instance = axios.create({
    baseURL: "https://technical-task-api.icapgroupgmbh.com/api/",
    headers: {
        Authorization: `Bearer ${token}`
    }
})