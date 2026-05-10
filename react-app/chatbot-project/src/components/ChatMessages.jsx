import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';   
import './ChatMessages.css'

export function ChatMessages({
chatMessages}){
    const chatMessagesRef = useRef(null);
    
    useEffect(()=>{
        const containerElem = chatMessagesRef.current;
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    },[chatMessages]);
    // const [chatMessage,setChatMessage] = array;
    // const chatMessage = array[0];
    // const setChatMessage = array[1];

    return(
        <div 
        className = "chat-messages-container"
        ref = {chatMessagesRef}> 
            {chatMessages.map((msg) => {
                return(
                    <ChatMessage
                        message = {msg.message}
                        sender = {msg.sender}
                        key =   {msg.id}
                    />
                );
            })}
        </div>
    );
    
}

export default ChatMessages;
//useful when you want to specific component from a file