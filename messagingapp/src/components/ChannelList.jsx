import * as React from "react/cjs/react.production.min";

export class ChannelList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
            <div>
                Channel list will be here.
            </div>
            <button
                type="button"
                className="btn btn-primary">
                <span class="glyphicon glyphicon-plus"/>
            </button>
        </div>
    }
}