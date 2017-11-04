import * as React from "react/cjs/react.production.min";
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import {ChannelMessages} from "./ChannelMessages";
import {ChannelEditedItem} from "./ChannelEditedItem";

export class MessagePanel extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
    }

    _SendOnClick = () => {

    }

    render(){
        return <div>
            <input class="messageTextArea"
                   type="text"
                   id={uuidv4()}
                   placeholder="Enter message here"
                   onfocus="this.placeholder = ''"/>
            <button
                type="button"
                className="btn btn-primary"
                onClick={this._SendOnClick()}>
                <span>SEND</span>
            </button>
        </div>
    }
}