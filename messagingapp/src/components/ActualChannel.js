import React from 'react';
import {ChannelMessages} from "./ChannelMessages";

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
            </div>
        )
    }
}