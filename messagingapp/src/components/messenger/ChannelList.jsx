import * as React from "react/cjs/react.production.min";
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import {MessageList} from "../../containers-redux/messenger/MessageList";
import {ChannelItem} from "../../containers-redux/messenger/ChannelItem";
import {ChannelEditedItem} from "../../containers-redux/messenger/ChannelEditedItem";
import {LogoutButton} from "../../containers-redux/app/LogoutButton";

export class ChannelList extends React.Component {
    static propTypes = {
        editedChannelId: PropTypes.string,
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        onCreateNew: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired,
        selectedChannel: PropTypes.object.isRequired,
        onSelectChannel: PropTypes.func.isRequired
    };

    componentWillMount(){
        this.props.onInitialize();
    }

    _onAddClick = () => {
        const newChannel = {
            id : null,
            name: 'New channel'
        };
        this.props.onCreateNew(newChannel)
    };

    render() {
        const {list} = this.props;
        const itemElements = list.map(item => {
            if (item.id === this.props.editedChannelId) {
                return (<ChannelEditedItem key={item.id} item={item}/>);
            }
            return (
                (<ChannelItem key={item.id}
                              onExpand={this.props.onStartEditing}
                              onClick={() => this.props.onSelectChannel(item)} item={item}/>));
        });
        return (
            <div>
                <div className="leftPanel">
                    <div className="list-group">
                        {itemElements}
                    </div>
                    <button
                        type="button"
                        onClick={this._onAddClick}
                        className="btn btn-primary">
                        <span className="glyphicon glyphicon-plus"/>
                    </button>
                    <LogoutButton/>
                </div>
                <div className="middlepanel">
                    <MessageList channel={this.props.selectedChannel}/>
                </div>
            </div>
        )
    }
}