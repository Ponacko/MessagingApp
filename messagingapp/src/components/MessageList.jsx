import * as React from "react/cjs/react.production.min";
import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import {Message} from "./Message";
import {MessagePanel} from "../containers-redux/MessagePanel";
import PropTypes from 'prop-types';

export class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: this._getDefaultChannel,
            list: this._loadInitialChannelMessages(this._getDefaultChannel),
        };
    }
    
    _getDefaultChannel() {
        return {
            id: uuidv4(),
            title: "Empty channel",
            messageList: Immutable.List()
        }
    }

    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            messageList: PropTypes.instanceOf(Immutable.Iterable),
            onCreateNew: PropTypes.func.isRequired,
        }).isRequired
    };

    componentWillUpdate(nextProps, nextState) {
        if (this.state.list !== nextState.list) {
            const json = (this.state.channel.id === nextState.channel.id)? nextState.list : this.state.list;
            localStorage.setItem('messages' + this.state.channel.id, JSON.stringify(json.toJS()));
            console.log('saving' + nextState.list.toJS() + ' messages to' +  this.state.channel.title);
        }
    }

    componentWillReceiveProps(props) {
        console.log('props to' + props.channel.title);
        this.setState({
            channel: props.channel,
            list: this._loadInitialChannelMessages(props.channel),
        });
    }

    _loadInitialChannelMessages = (channel) => {
        let storedListJSON = null;
        if (channel) {
            console.log('list to' + channel.title);
            storedListJSON = localStorage.getItem('messages' + channel.id);
            console.log('loading messages' + channel.title);
        }
        return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : Immutable.List();

    };

    _addToList = (x) => {
        const id = uuidv4();
        const message = {
            id: id,
            title: x,
            datum: new Date().toLocaleTimeString()
        };
        return this.props.onCreateNew(message);
    };


    render() {
        const {list} = this.props;
        const messages = list.map(item => {
            return (<Message key={item.id} item={item}/>)
        });
        return <div className="list-group messages">
            {this.state.channel.title}
            {messages}
            <div className="bottomPanel">
                <MessagePanel onSend={this._addToList}/>
            </div>
        </div>
    }
}