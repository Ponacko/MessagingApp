import * as React from "react/cjs/react.production.min";

export class MessagePanel extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
            <textarea className="messageTextArea">
                Write your message here.
            </textarea>
            <button
                type="button"
                className="btn btn-primary">
                <span class="glyphicon glyphicon-send"/>
            </button>
        </div>
    }
}