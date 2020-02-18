import React, { Component } from 'react';
import MessageBox from './messageBox'

class ChatList extends Component{
    getListChat(){
        const listChat = this.props.chatData.map((chat, key) => {
            return (
        
            <MessageBox key={key} chat={chat} delete = {this.props.delete} />
            );
        })
        return listChat;
    }
    render(){
        return(
         this.getListChat()
        )
    }
}

export default ChatList;