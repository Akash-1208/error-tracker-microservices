import axios from "axios";

const API_BASE_URL ="http://localhost:8085/api/errors";

export const getAllErrors = async()=>{
    try{
        const response= await axios.get(API_BASE_URL);
        return response.data;

    }
    catch(error){
        console.log("Error Fetching Data",error);
        return[]
    }
}

export const getAllErrorById = async(id)=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;

    }
    catch(error){
        console.log("Error Fetching Data",error);
        return[]
    }
}