import * as React from "react/cjs/react.production.min";
import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import {Message} from "./Message";
import {MessagePanel} from "./MessagePanel";

export class ChannelMessages extends React.Component{
    constructor(){
        super();
        this.state = {
            list: Immutable.List(),
        };
    }

    _addToList = (x) =>{
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: uuidv4(),
                title: x,
                datum: new Date().toLocaleTimeString()
            })
        }));
    };

    render(){
        const { list } = this.state;
        const messages = list.map(item => {
            return (<Message key={item.id} item={item}/>)
        });
        return <div>
                <div className="list-group messages">
                  {messages}
                </div>
                <div className="bottomPanel">
                    <MessagePanel onSend={this._addToList}/>
                </div>
               </div>
    }
}