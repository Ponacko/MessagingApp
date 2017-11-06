import * as React from "react/cjs/react.production.min";
import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import {Message} from "./Message";
import {MessagePanel} from "./MessagePanel";

export class ChannelMessages extends React.Component{
    constructor(){
        super();
        this.state = {
            list: Immutable.List([
                {
                    id: uuidv4(),
                    title: 'First message',
                    datum: new Date().toLocaleTimeString()
                },
                {
                    id: uuidv4(),
                    title: 'Second message',
                    datum: new Date().toLocaleTimeString()
                }
            ]),
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
        return <div className="list-group">
                  {messages}
                <div className="bottomPanel">
                    <MessagePanel onSend={this._addToList}/>
                </div>
              </div>
    }
}