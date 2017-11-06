import * as React from "react/cjs/react.production.min";
import PropTypes from 'prop-types';

export class MessagePanel extends React.Component{

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        onSend: PropTypes.func.isRequired
    }

    _string = () => {
        console.error(document.getElementById("5").value);
        this.props.onSend(document.getElementById("5").value);
    }

    render(){
        return <div>
            <input className="messageTextArea"
                   type="text"
                   id="5"
                   placeholder="Enter message here"
                   onfocus="this.placeholder = ''"/>
            <button
                type="button"
                className="btn btn-primary"
                onClick={this._string}>
                <span>SEND</span>
            </button>
        </div>
    }
}