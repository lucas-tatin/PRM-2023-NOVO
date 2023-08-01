import { Avatar, Typography } from "@mui/material";

function  TopicCardHeader() {
    return (
        <div id="topic-card-header">
            <Avatar alt="Fulano de Tal" />

            <Typography variant="h6">
                Fulano de Tal
            </Typography>
            
            <Typography variant="caption">
                Criado há 8 horas
            </Typography>
        </div>
    )
}

export default TopicCardHeader;