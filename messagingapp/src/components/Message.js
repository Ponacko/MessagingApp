import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            datum: PropTypes.string
        }).isRequired,
    };


    render(){
        var date = new Date();
        return(
            <div className="message msj-rta macro">
                {this.props.item.datum} {' : '}{this.props.item.title}
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
                <button
                    type="button"
                    //onClick={this._onAddClick}
                    className="btn btn-primary">
                    <span className="glyphicon glyphicon-remove"/>
                </button>
            </div>
        );
    }
}