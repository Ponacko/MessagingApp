import * as React from "react/cjs/react.production.min";
import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import {Message} from "../../containers-redux/messenger/Message";
import {MessagePanel} from "../../containers-redux/messenger/MessagePanel";
import PropTypes from 'prop-types';
import * as routes from "../../constants/routes";
import {Button} from 'semantic-ui-react';
import {Link,} from 'react-router-dom';

export class MessageList extends React.Component {

    static propTypes = {
        channel: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
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
        return this.props.onCreateNew(this.props.channel, message);
    };

    render() {
        const {list} = this.props;
        const messages = list.map(item => {
            return (<Message key={item.id} item={item} />)
        });
        return <div className="list-group messages">
            <Link to={routes.PROFILE}>
                <Button className="btn btn-primary" style={{float: "right"}}>
                    <p>PROFILE</p>
                </Button>
            </Link>
            {this.props.channel.name}
            {messages}
            <div className="bottomPanel">
                <MessagePanel onSend={this._addToList}/>
            </div>
        </div>
    }
}