import axios from "axios";
import { IAssento, IOnibus } from "../@types";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

//ENDPOINTS
const _ASSENTOS = '/assentos';
const _ONIBUS = '/onibus';

//ASSENTOS
const fazerReserva = (assento: IAssento) => (api.post(_ASSENTOS, assento));
const getAssentosByOnibus =  (onibus: IOnibus) => (api.get(`${_ASSENTOS}?onibus=${onibus.id}`));
const getOnibus = (onibus: IOnibus) => (api.get(`${_ONIBUS}?onibus=${onibus.id}`));

export {
    fazerReserva,
    getAssentosByOnibus,
    getOnibus
}