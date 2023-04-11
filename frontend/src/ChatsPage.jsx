import {PrettyChatWindow} from "react-chat-engine-pretty"
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="65cc2353-3435-4994-ab72-29262cabd59f"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export  default ChatsPage