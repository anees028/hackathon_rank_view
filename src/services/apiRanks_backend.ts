import axios, { AxiosResponse } from 'axios';
import { TeamData } from '../types';

let API_URL = import.meta.env.VITE_API_URL;


const getAxiosInstance = async () => {
    const axiosInstance = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return axiosInstance;
}



export const getTeamsRanks = async () =>{
    const axiosInstance = await getAxiosInstance();
    const response: AxiosResponse<TeamData[]> = await axiosInstance.get<
        TeamData[]
    >(`hackathon_rank_data`);
    return response.data;
};


