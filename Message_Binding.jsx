import React, { Component } from 'react'

class Message_Binding extends Component {
     state = {
         msg: "I love you Mam Mam"
     }
    messageHandler = (msg) => { 
      this.setState({msg: msg})  
    }
    render() {
        return (
            <div>
                <h2>Wish Message : {this.state.msg}</h2>
              <button onClick={this.messageHandler.bind(this, "Good Morning Mam Mam")}>GM</button>
              <button onClick={this.messageHandler.bind(this, "Good Afternoon Mam Mam")}>GA</button>
              <button onClick={this.messageHandler.bind(this, "Good Night Mam Mam")}>GN</button>
            </div>
        )
    }
}

export default Message_Binding