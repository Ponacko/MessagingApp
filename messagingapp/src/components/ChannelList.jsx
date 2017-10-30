import * as React from "react/cjs/react.production.min";
import uuidv4 from 'uuid/v4';
import Immutable from 'immutable';
import {ChannelItem} from "./ChannelItem";

export class ChannelList extends React.Component{
    constructor(){
        super();

        this.state = {
            list: Immutable.List([
                {
                    id: uuidv4(),
                    title: 'First channel'
                },
                {
                    id: uuidv4(),
                    title: 'Second channel'
                }])
        };
        this._onAddClick = this._onAddClick.bind(this);
    }

    _onAddClick = () => {
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: uuidv4(),
                title: 'New channel'
            })
        }))
    };

    _onDelete = (deletedItemId) => {
        this.setState((previousState) => ({
            list: previousState.list.filterNot(item => item.id === deletedItemId)
        }))
    };

    render(){
        const { list } = this.state;
        const itemElements = list.map(item => {
            return (
                (<ChannelItem key={item.id} item={item} onDelete={this._onDelete}/>));
        });
        return <div>
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
    }
}