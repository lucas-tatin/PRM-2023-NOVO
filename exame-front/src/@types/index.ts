export interface IOnibus {
    id: number;
    motorista: string;
    origem: string;
    destino: string;
    assentos: number;
}
export interface IAssento {
    id: number;
    numero: number;
    onibus: IOnibus;
    passageiro: string;

}