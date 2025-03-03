import axios, { AxiosResponse } from 'axios';
import { TeamData } from '../types';

let API_URL = import.meta.env.VITE_API_URL;


const getAxiosInstance = async () => {
    const axiosInstance = axios.create({
        baseURL: API_URL,
        headers: {
            "x-api-key": "75e5de5d-bad0-4ce2-ab78-9eb80f8b2087",
            'Content-Type': 'application/json',
        }
    });
    return axiosInstance;
}



export const getTeamsRanks = async () =>{
    const axiosInstance = await getAxiosInstance();
    const response: AxiosResponse<TeamData[]> = await axiosInstance.get<
        TeamData[]
    >(`core/interface/Score`);
    return response.data;
};


