import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";

export function MainHeader() {

    return (
        <AppBar position="static">
            <Toolbar
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Typography variant="h6">
                    Reserva de Assentos
                </Typography>

                <Avatar
                    alt="Fulano de Tal"
                />
            </Toolbar>
        </AppBar>
    )
}