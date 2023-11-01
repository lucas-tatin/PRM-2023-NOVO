import axios from "axios";
import { ICredential, IUser } from "../@types";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

//ENDPOINTS
const _AUTH = '/auth'

//AUTH
const signIn = (credential: ICredential) => api.post(`${_AUTH}/signin`, credential);
const signUp = (user: IUser) => api.post(`${_AUTH}/signup`, user);


export {
    signIn,
    signUp
}

