import * as React from "react/cjs/react.production.min";
import uuidv4 from 'uuid/v4';
import Immutable from 'immutable';

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

    render(){
        const { list } = this.state;
        const itemElements = list.map(item => {
            return (
                <li key={item.id}>{item.title}{' '}
                </li>);
        });
        return <div>
            <div>
                <ul>
                    {itemElements}
                </ul>
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