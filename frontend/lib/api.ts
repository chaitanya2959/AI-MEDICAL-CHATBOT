import axios from "axios";

const API = axios.create({
baseURL: "http://127.0.0.1:8000",
});

// Image Analysis
export const uploadImage = (file: File) => {
const formData = new FormData();

formData.append("image", file);

return API.post("/image", formData, {
headers: {
"Content-Type": "multipart/form-data",
},
});
};

// Medical Report PDF Analysis
export const uploadReport = (file: File) => {
const formData = new FormData();

formData.append("file", file);

return API.post("/report", formData, {
headers: {
"Content-Type": "multipart/form-data",
},
});
};

export default API;
