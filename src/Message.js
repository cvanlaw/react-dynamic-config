import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: 'not set'
        };
      }

    render() {
        this.fetchConfig();
        return(
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }

    fetchConfig() {
        fetch('./config.json')
            .then((resp) => resp.json())
            .then((json) => this.setState({message: json.message}));
    }
}

export default Message;