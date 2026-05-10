import { useState, useRef } from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages,setChatMessages}){

    const [inputText, setInputText] = useState('');
    const inputRef = useRef(null);

    function saveInputText(event){
        setInputText(event.target.value);
    }

    async function sendMessage(){

        if(!inputText.trim()) return;

        const newChatMessages = [
            ...chatMessages,
            {
                message : inputText,
                sender : 'user',
                id : crypto.randomUUID()
            }
        ];

        setChatMessages(newChatMessages);
        
        //set chat input empty when the chats are loading but still not working
        inputRef.current.value = '';
        setInputText('');
        
        const loadId = crypto.randomUUID();

        setChatMessages([
            ...newChatMessages,
            {
                message : 'Loading...',
                sender : 'robot',
                id : loadId 
            }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message : response,
                sender : 'robot',
                id : loadId
            }
        ]);

    }    
    
    function handleKey(event){
        if(event.key === "Enter"){
            sendMessage();
        }
        else if(event.key === "Escape"){
            setInputText('')
        }
    }

    return(
        <div className = "chat-input-container">
            <input 
                placeholder = "Send a message to Chatbot"
                size="30"
                onChange = {saveInputText}
                value = {inputText}
                onKeyDown = {handleKey}
                className = "chat-input"
                ref = {inputRef}
            />
            <button
                onClick = {sendMessage}
                className = "send-button"
            >Send</button>
        </div>
    );
}