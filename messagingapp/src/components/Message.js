import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            datum: PropTypes.string
        }).isRequired,
        onDelete: PropTypes.func.isRequired
    };

//https://bootsnipp.com/snippets/featured/simple-chat
    render(){
        var date = new Date();
        return(
            <li style={{width:"100%"}}>
            <div className="message msj-rta macro">
                <div class="text text-l">
                    <p><small>{this.props.item.datum}</small></p><p>{this.props.item.title}</p>
                </div>
                <button
                    type="button"
                    //onClick={this._onAddClick}
                    className="btn btn-primary">
                    <span className="glyphicon glyphicon-upload"/>
                </button>
                <button
                    type="button"
                    //onClick={this._onAddClick}
                    className="btn btn-primary">
                    <span className="glyphicon glyphicon-download"/>
                </button>
                <i className="glyphicon glyphicon-remove pull-right" aria-hidden="true"
                   onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
            </li>
        );
    }
}