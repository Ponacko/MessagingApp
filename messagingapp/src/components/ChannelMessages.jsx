import * as React from "react/cjs/react.production.min";
import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import {Message} from "./Message";

export class ChannelMessages extends React.Component{
    constructor(){
        super();
        this.state = {
            list: Immutable.List([
                {
                    id: uuidv4(),
                    title: 'First message'
                },
                {
                    id: uuidv4(),
                    title: 'Second message'
                }
            ]),
        };
    }

    render(){
        const { list } = this.state;
        const messages = list.map(item => {
            return (<Message key={item.id} item={item}/>)
        });
        return <div className="list-group">
                  {messages}
              </div>
    }
}