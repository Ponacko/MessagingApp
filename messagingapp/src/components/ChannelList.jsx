import * as React from "react/cjs/react.production.min";
import uuidv4 from 'uuid/v4';
import Immutable from 'immutable';
import {ChannelItem} from "./ChannelItem";
import {ChannelEditedItem} from "./ChannelEditedItem";
import {ChannelMessages} from "./ChannelMessages";

export class ChannelList extends React.Component {
    constructor() {
        super();

        this.state = {
            list: this._loadInitialChannelList(),
            editedItemId: null
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.list !== nextState.list) {
            localStorage.setItem('channelList', JSON.stringify(nextState.list.toJS()));
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
                title: 'First channel'
            },
            {
                id: uuidv4(),
                title: 'Second channel'
            }
        ]);
    };

    _onAddClick = () => {
        const itemId = uuidv4();
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: itemId,
                title: 'New channel'
            }),
            editedItemId: itemId
        }));
    };

    _startEditing = (itemId) => {
        this.setState({
            editedItemId: itemId
        });
    };

    _cancelEditing = () => {
        this.setState({
            editedItemId: null
        });
    };

    _updateItem = (item) => {
        this.setState(previousState => {
            let newState = {
                editedItemId: null,
            };

            const itemIndex = previousState.list.findIndex(i => i.id === item.id);
            if (itemIndex >= 0) {
                newState.list = previousState.list.update(itemIndex, previousItem => ({...previousItem, ...item}));
            }

            return newState;
        });
    };


    _onDelete = (deletedItemId) => {
        this.setState((previousState) => ({
            list: previousState.list.filterNot(item => item.id === deletedItemId)
        }));
    };

    render() {
        const {list} = this.state;
        const itemElements = list.map(item => {
            if (item.id === this.state.editedItemId) {
                return (<ChannelEditedItem key={item.id} item={item} onCancel={this._cancelEditing}
                                           onSave={this._updateItem}/>);
            }
            return (
                (<ChannelItem key={item.id} item={item} onDelete={this._onDelete} onExpand={this._startEditing}/>));
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
                    <ChannelMessages/>
                </div>
            </div>
        )
    }
}