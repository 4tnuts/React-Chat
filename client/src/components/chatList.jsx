import React, { Component } from 'react';
import MessageBox from './messageBox'

class ChatList extends Component{
    getListChat(){
        const listChat = this.props.chatData.map((chat, index) => {
            return (
            <MessageBox key={index} chat={chat} remove={this.props.delete} />
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