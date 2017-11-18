import * as React from "react/cjs/react.production.min";
import uuidv4 from 'uuid/v4';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import {ChannelEditedItem} from "./ChannelEditedItem";
import {ChannelMessages} from "./ChannelMessages";
import {ChannelItem} from "../containers-redux/ChannelItem";

export class ChannelList extends React.Component {
    static propTypes = {
        editedChannelId: PropTypes.string,
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        onCreateNew: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired,
        onCancelEditing: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            list: this._loadInitialChannelList(),
            selectedChannel: null
        };
    }

    getSelectedChannel() {
        if (this.state.selectedChannel) {
            return this.state.selectedChannel;
        }
        else if (this.state.list[0]) {
            return this.state.list[0];
        }
        else return (
                {
                    id: uuidv4(),
                    title: 'Empty channel',
                    messageList: Immutable.List()
                }

            )

    }

    setSelectedChannel(channel) {
        this.setState((previousState) => ({
            list: previousState.list,
            editedChannelId: previousState.editedChannelId,
            selectedChannel: channel
        }));
    }


    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            localStorage.setItem('channelList', JSON.stringify(nextProps.list.toJS()));
        }
    }

    _loadInitialChannelList = () => {
        const storedListJSON = localStorage.getItem('channelList');
        return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : this._getDefaultChannelList();
    };

    _getDefaultChannelList = () => {
        return Immutable.List([
            {
                id: uuidv4(),
                title: 'First channel',
                messageList: Immutable.List()
            },
            {
                id: uuidv4(),
                title: 'Second channel',
                messageList: Immutable.List()
            }
        ]);
    };

    _onAddClick = () => {
        const itemId = uuidv4();
        const newChannel = {
                id: itemId,
                title: 'New channel',
                messageList: Immutable.List()
            };
        this.props.onCreateNew(newChannel)
    };

    render() {
        const {list} = this.props;
        const itemElements = list.map(item => {
            if (item.id === this.props.editedChannelId) {
                return (<ChannelEditedItem key={item.id} item={item} onCancel={this.props.onCancelEditing}
                                           onSave={this.props.onUpdate}/>);
            }
            return (
                (<ChannelItem key={item.id}
                              onExpand={this.props.onStartEditing}
                              onClick={() => this.setSelectedChannel(item)} item={item}/>));
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
                </div>
                <div className="rightPanel">
                    <ChannelMessages channel={this.getSelectedChannel()}/>
                </div>
            </div>
        )
    }
}