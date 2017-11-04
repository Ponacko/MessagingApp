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

    render(){
        return <div>
            <form>
            <input class="messageTextArea"
                id="title" value={this.props.title}>
            </input>
            </form>
            <button
                type="button"
                className="btn btn-primary"
                onClick={this.input}>
                <span>SEND</span>
            </button>
        </div>
    }
}