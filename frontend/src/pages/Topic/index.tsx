import { Box } from "@mui/material"
import HeaderProfile from "../../components/HeaderProfile"
import TopicList from "../../components/TopicList"

function TopicPage() {

    const profile = {
        fullname: 'Lucas Tatin',
        username: 'lucastatin',
        description: 'Apaixonado por tecnologia, carros e futebol',
        createdAt: '2022-08-22'
    }

    const topics = [
        {
            owner: { fullname: 'Pedro da Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad sapiente non veritatis aspernatur architecto! Eveniet, et eius maxime dolorem sequi, nulla aliquam ipsam tenetur magni officia, quisquam totam sapiente!',
            comments: 1,
            reposts: 1,
            likes: 30,
            createdAt: '2023-08-01 19:23:00'
        },{
            owner: { fullname: 'Marina Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad sapiente non veritatis aspernatur architecto! Eveniet, et eius maxime dolorem sequi, nulla aliquam ipsam tenetur magni officia, quisquam totam sapiente!',
            comments: 12,
            reposts: 2,
            likes: 300,
            createdAt: '2023-08-02 19:23:00'
        },{
            owner: { fullname: 'Lula da Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad sapiente non veritatis aspernatur architecto! Eveniet, et eius maxime dolorem sequi, nulla aliquam ipsam tenetur magni officia, quisquam totam sapiente!',
            comments: 51,
            reposts: 14,
            likes: 30,
            createdAt: '2023-08-04 19:23:00'
        },{
            owner: { fullname: 'Neymar Junior' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad sapiente non veritatis aspernatur architecto! Eveniet, et eius maxime dolorem sequi, nulla aliquam ipsam tenetur magni officia, quisquam totam sapiente!',
            comments: 0,
            reposts: 0,
            likes: 1,
            createdAt: '2023-08-7 19:23:00'
        },{
            owner: { fullname: 'Pedro da Scobby' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad sapiente non veritatis aspernatur architecto! Eveniet, et eius maxime dolorem sequi, nulla aliquam ipsam tenetur magni officia, quisquam totam sapiente!',
            comments: 0,
            reposts: 0,
            likes: 10,
            createdAt: '2023-08-11 19:23:00'
        },
    ]

    return (
        <Box id="topic-page" display="flex" flexDirection="column"
             alignItems="center" gap={3}>

            <HeaderProfile user={profile} />

            <TopicList items={topics} />
        </Box>
    )

}

export default TopicPage