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

    _string = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            event.preventDefault();
            this.props.onSend(document.getElementById("5").value);
            document.getElementById("5").value = "";
        }
    }

    _string2 = () => {
        this.props.onSend(document.getElementById("5").value);
        document.getElementById("5").value = "";
    }

    render(){
        return <div>
            <textarea className="messageTextArea messagePanel"
                   type="text"
                   id="5"
                   placeholder="Enter message here"
                   onKeyPress={this._string.bind(this)}
                   onfocus="this.placeholder = ''"/>
            <button
                type="button"
                className="btn btn-primary"
                onClick={this._string2}>
                <span class="glyphicon glyphicon-send"/>
            </button>
        </div>
    }
}