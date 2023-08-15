import { Avatar, Box, Typography } from "@mui/material";

//Import de imagens
import banner from '../../assets/img/profile_banner.png';
import avatar from '../../assets/img/profile_avatar.jpg';
import { CalendarMonthOutlined } from "@mui/icons-material";

//Import do Estilo
import './style.css'

function HeaderProfile() {
    return (
        <Box id="header-profile">

            <Box className="header-profile-background">
              <img src={banner} />
            </Box>

            <Box className="header-profile-detail">
                <Avatar alt="Fulano de Tal" style={{width: 128, height: 128}}
                        src={avatar} className="header-profile-detail-avatar" />

                <Box className="header-profile-detail-text">
                    <Typography variant="h5">
                        Fulano de tal
                    </Typography>

                    <Typography variant="subtitle1" component="h6">
                        @fulanoDeTal
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium corrupti aut nostrum, ratione accusamus eveniet corporis veritatis sed soluta saepe, quis, architecto molestias iste quidem velit! Illo assumenda quaerat nisi.
                    </Typography>

                    <Typography variant="caption">
                        <CalendarMonthOutlined />
                        Entrou em agosto de 2023
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default HeaderProfile;