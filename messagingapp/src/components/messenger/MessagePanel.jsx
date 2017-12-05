import * as React from "react/cjs/react.production.min";
import PropTypes from 'prop-types';
import {BLANK} from "../../utils/constants";

export class MessagePanel extends React.Component{

    constructor(props) {
        super(props);
    }

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        message : PropTypes.string.isRequired,
        onSend: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired
    };
	
    _sendWithKey = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            event.preventDefault();
            this._sendMessage();
        }
    };

    _sendMessage = () => {
        if (this.props.message) {
            this.props.onSend(this.props.message);
        } else {
            alert("You can't send empty message");
        }
    };

    render(){
        return <div>
            <textarea className="messageTextArea messagePanel"
                   type="text"
                   id="5"
                   placeholder="Type a message"
                   onKeyPress={this._sendWithKey}
                   value={this.props.message}
                   onChange={(event) => this.props.onChange(event.target.value)}/>
            <button
                type="button"
                className="btn btn-primary"
                onClick={this._sendMessage}>
                <span className="glyphicon glyphicon-send"/>
            </button>
        </div>
    }
}