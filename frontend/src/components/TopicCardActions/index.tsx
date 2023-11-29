import { ChatBubble, ChatBubbleOutline, FavoriteBorder, Repeat } from "@mui/icons-material";
import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";
import './style.css';
import { IUser } from "../../@types";

type TopicCardActionsProps = {
    commented: boolean,
    totalComments: number,
    clickComment:() => void,
    totalLikes: number,
    liked: boolean,
    clickLike:() => void

    reposters: IUser[],
    clickRespost:() => void,
    likers: IUser[],
}
function TopicCardActions({
    commented,
    totalComments,
    clickComment,
    reposters,
    clickRespost


}: TopicCardActionsProps) {
    return (
        <div id="topic-card-actions">
            <Button variant="text" size="small" 
            startIcon={commented ? <ChatBubble /> : <ChatBubbleOutline />}
            onClick={clickComment}>
                {totalComments}
            </Button>
          

            <Tooltip title={
                reposters.length > 0 ?(
                    <Box display="flex" flexDirection="column" gap={1}
                    style={{padding: '0.5rem'}}>

                        {reposters.map((user, index) => (
                            <Box display="flex" flexDirection="row" gap={1} key={index}>
                                <Avatar alt={user.fullname} sx={{width: 24, height: 24}} />
                                <Typography variant="body2">
                                    {user.fullname}
                                </Typography>
                            </Box>
                        ))}

                    </Box>
                ) : (
                    <span>Repostar</span>
                )
            }>
                <Button variant="text" size="small" startIcon={<Repeat />}
                onClick={clickRespost}>
                {reposters.length}
                </Button>
            </Tooltip>

            <Button variant="text" size="small" startIcon={<FavoriteBorder />}>
                33
            </Button>
            
        </div>
        
    )
}

export default TopicCardActions;