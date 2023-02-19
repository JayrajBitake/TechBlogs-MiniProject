import axios from "axios";

// import App from "./App";

export default axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
});
