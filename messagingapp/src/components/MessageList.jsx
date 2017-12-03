import * as React from "react/cjs/react.production.min";
import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import {Message} from "../containers-redux/Message";
import {MessagePanel} from "../containers-redux/MessagePanel";
import PropTypes from 'prop-types';
import {getInitialChannelMessages} from "../utils/getInitialChannelMessages"

export class MessageList extends React.Component {

    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            onCreateNew: PropTypes.func.isRequired,
        }).isRequired,
        list: PropTypes.instanceOf(Immutable.List).isRequired
    };

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list && this.props.channel.id === nextProps.channel.id) {
            console.log(nextProps.list);
            localStorage.setItem('messages' + this.props.channel.id, JSON.stringify(nextProps.list.toJS()));
        }
    }

    _addToList = (x) => {
        const id = uuidv4();
        const message = {
            id: id,
            title: x,
            datum: new Date().toLocaleTimeString(),
            counter: 0
        };
        return this.props.onCreateNew(message);
    };


    render() {
        const {list} = this.props;
        const messages = list.map(item => {
            return (<Message key={item.id} item={item}/>)
        });
        return <div className="list-group messages">
            {this.props.channel.title}
            {messages}
            <div className="bottomPanel">
                <MessagePanel onSend={this._addToList}/>
            </div>
        </div>
    }
}