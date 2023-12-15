import { useEffect, useState } from "react";

//MATERIAL UI
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Snackbar, TextField, Typography } from "@mui/material"

//COMPONNENTS
import { MainHeader } from "./components/MainHeader"
import { Assento } from "./components/Assento";

//TYPES
import { IAssento, IOnibus } from "./@types";

//SERVICES
import { fazerReserva, getAssentosByOnibus, getOnibus } from "./services";

//STYLES
import './styles/global.css';


function App() {

	//STATES - CONTROL
	const [showDialog, setShowDialog] = useState(false);

	//STATES - OBJECTS
	const [onibus, setOnibus] = useState<IOnibus>({} as IOnibus);
	const [assento, setAssento] = useState<IAssento>({} as IAssento);
	const [assentos, setAssentos] = useState<IAssento[]>([]);
	const [messageSuccess, setMessageSuccess] = useState('Message Sucess');
	const [messageError, setMessageError] = useState('Message Error');



	//METODOS
	const handleIniciarReserva = (assento: IAssento) => {
		setAssento({ ...assento, passageiro: '' });
		setShowDialog(true);
	}
	const handleReservar = () => {

		//Criar Passageiro
		fazerReserva(assento)
			.then(result => {
				//Remove da lista o assento desatualizado
				const filteredAssentos = assentos.filter(itemFilter => itemFilter.id !== assento.id);

				//Adiciona na lista o assento atualizado e ordena ela por ID
				const orderedAssentos = [...filteredAssentos, result.data].sort((a, b) => (a.id > b.id ? 1 : -1))

				//Inicia as states novamente
				setAssentos(orderedAssentos);

				//Fecha o Dialog
				setShowDialog(false);

				//Mostra mensagem de sucesso
				setMessageError(`Poltrona ${result.data.numero} reservada para ${result.data.passageiro}`);
				setTimeout(() => {
					setMessageError('Message Error');
				}), 5000);

				//Mostra mensagem de sucesso
				setMessageSuccess(`Poltrona ${result.data.numero} reservada para ${result.data.passageiro}`);
				setTimeout(() => {
					setMessageSuccess('messageSucess');
				}), 5000);
			});
	}

	//USEEFFECT
	useEffect(() => {

		//Pega o ônibus
		getOnibus()
			.then(result => {
				setOnibus(result.data);

				//TO-DO
				return getAssentosByOnibus(result.data)
					.then(result => {
						setAssentos(result.data);
					})
			})
			.catch(error => {
				setMessageError(error.message);
			});

	}, []);

	return (
		<div>

			<MainHeader />

			<main>
				<Paper elevation={1}
					className="painel-detalhes">
					<Typography variant="caption" component="div">
						De:
					</Typography>
					<Typography variant="caption" component="div">
						Para: 
					</Typography>
					<Typography variant="caption" component="div">
						Motorista: 
					</Typography>
				</Paper>
				<Box className="onibus">
					{assentos.map((assento: IAssento) => (
						
					))}
				</Box>
				
			</main>

			<Dialog open={showDialog} onClose={() => setShowDialog(false)}>
				<DialogTitle>Reservar Poltrona {assento.numero}</DialogTitle>
				<DialogContent>
					<TextField
						fullWidth
						label="Nome do passageiro"
						variant="outlined"
						margin="normal"
						size="small"
						type="text"
						autoFocus={true}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setShowDialog(false)}>Cancelar</Button>
					<Button variant="contained" onClick={handleReservar}>Confirmar</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default App
