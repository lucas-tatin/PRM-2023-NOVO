import { useEffect, useState } from "react";
import { IComment, ITopic, IUser } from "../../@types";
import TopicCardActions from "../TopicCardActions";
import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import { Alert, Snackbar } from "@mui/material";
import TopicComment from "../TopicComment";
import { createComment, createTopic, getCommentsByTopic, getRepostsByTopic, getTopicsById } from "../../services";
import { useAuth } from "../../hook/useAuth";
import { useTopic } from "../../hook/useTopic";

type TopicCardProps = {
    topic: ITopic
}

function TopicCard({
    topic
}: TopicCardProps) {

    //USER
    const { user } = useAuth();

    //TOPIC
    const { topics, setTopics } = useTopic();


    //STATES - CONTROL
    const [messageError, setMessageError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('');

    //COMMENTS
    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState<IComment>({} as IComment);
    const [comments, setComments] = useState<IComment[]>([]);
    const [totalComments, setTotalComments] = useState(0)

    const handleClickComment = () => {
        setShowComments(!showComments);
    }
    const postComment = async (contentText: string): Promise<void> => {

        //Preparar um comentário para ser enviado
        const commentForm: IComment = {
            user: user,
            topic: topic,
            content: contentText
        }

        createComment(commentForm)
            .then(result => {
                setComment(result.data);
                setTotalComments(totalComments+1);

                setComments([...comments, result.data]);

                setMessageSuccess('Comentário efetuado com sucesso!');
                setTimeout(() => {
                    setMessageSuccess('');
                }, 5000);

            })
            .catch(error => {
                setMessageError(error.message)
            })

    }

    //REPOSTS
    const [topicReposted, setTopicReposted]=useState<ITopic>();
    const [reposters, setReposters] = useState<IUser[]>([]);    
    const handleClickRepost = () => {

        //Preparar um TOPIC para ser enviado ao servidor
        const repostForm: ITopic = {
            owner: user,
            repost: topic,
            content: topic.content
        }

        //Chamar a service que manda o TOPIC para o servidor
        createTopic(repostForm)
            .then(result => {
                setReposters([...reposters, result.data.owner])

                setTopics([result.data, ...topics])

                setMessageSuccess('Topic repostado com sucesso!');
                setTimeout(() => {
                    setMessageSuccess('');
                }, 5000);
            })
            .catch(error => {
                setMessageError(error.message)
            })
    }

    //LIKES

    //EFFECT
    useEffect(() => {

        //TO-DO: Comments
        getCommentsByTopic( topic )
            .then(result => {
                const dados: IComment[] = result.data;
                setComments(dados);
                setTotalComments(dados.length);

                //Verifico se o usuário comentou este topic
                const found = dados.find(item => (item.user?.id == user?.id));
                if (found) {
                    setComment(found);
                }
            })
            .catch(error => {
                setMessageError(error.message);
            });

        //TO-DO: Reposts
        if (topic.topic_id){
            getTopicsById(topic.topic_id)
                .then(result  => {
                    setTopicReposted(result.data)
                })
                .catch(error => {
                    setMessageError(error.message)
                })
        }
            getRepostsByTopic(topic)
            .then(result => {
                const dados: ITopic[] = result.data;

                const users: IUser[] = []
                dados.forEach(topic => {
                    if (topic.owner) {
                        users.push(topic.owner)
                    }
                })
                setReposters(users);
            })
            .catch(error => {
                setMessageError(error.message)
            })

        //TO-DO: Likes

    }, []);

    return (
        <div id="topic-card">
            <TopicCardHeader 
                createdAt={topic.createdAt}
                owner={topic.owner}
             />

            <TopicCardBody 
                topicReposted={topicReposted}
                content={topic.content} />

            <TopicCardActions 
                commented={Boolean(comment.user)}
                totalComments={totalComments}
                clickComment={handleClickComment} 
                
                reposters={reposters}
                clickRespost={handleClickRepost}/>

            {showComments && (
                <TopicComment 
                    comments={ comments }
                    postComment={postComment} />
            )}

            <Snackbar
                open={Boolean(messageError)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert severity="error" elevation={6} variant="filled" onClose={() => setMessageError('')}>
                    {messageError}
                </Alert>
            </Snackbar>

            <Snackbar
                open={Boolean(messageSuccess)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert severity="success" elevation={6} variant="filled" onClose={() => setMessageSuccess('')}>
                    {messageSuccess}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default TopicCard;