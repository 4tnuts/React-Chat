import React, { Component } from "react"; 

class ChatForm extends Component {
  constructor(props){
    super(props)
    this.state = { name : '', message : ''}

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
    console.log(this.state.name)
  }

  handleChangeMessage(event) {
    this.setState({message: event.target.value});
    console.log(this.state.message)
  }

  handleSubmit(event) {
    this.props.addChat(this.state)
    this.setState({name : '', message : ''});
    event.preventDefault();
  }

  render() {
    {console.log(this.state.chats)}
    return (
      <div className="bottom_wrapper clearfix">
        <form action="" onSubmit={this.handleSubmit}>
      <div className="message_input_wrapper">
          <input
            value = {this.state.name}
            className="message_input"
            placeholder="Type your name here..."
            onChange = {this.handleChangeName}
          />
      </div>
      <div className="message_input_wrapper">
          <input
            value = {this.state.message}
            className="message_input"
            placeholder="Type your message here..."
            onChange = {this.handleChangeMessage}
          />
      </div>
      <button type="submit" className="send_message">Send</button>
      </form>
      <div className="icon"></div>
      <div className="text-center mt-3 reference">
      <small className="text-muted by">
          created by  https://github.com/4tnuts
        </small><br></br>
        <small className="text-muted by">
          template by sunithasundareswaran from https://bootsnipp.com/snippets/WaEvr
        </small>
      </div>
    </div>
    );
  }
}

export default ChatForm;
