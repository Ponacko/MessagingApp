import React from 'react';
import {ChannelMessages} from "./ChannelMessages";
import {MessagePanel} from "./MessagePanel";

export class ActualChannel extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className="rightPanel">
                    <ChannelMessages/>
                </div>
                <div className="bottomPanel">
                    <MessagePanel/>
                </div>
            </div>
        )
    }
}