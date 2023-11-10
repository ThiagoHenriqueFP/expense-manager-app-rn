import axios from 'axios';

//  https://exp-mngr.vercel.app/

export const axiosInstance = axios.create({
  baseURL: `https://exp-mngr.vercel.app/`
});