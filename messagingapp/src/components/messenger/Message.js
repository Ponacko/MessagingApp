import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.item.customData
        };
    }

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            createdAt: PropTypes.string,
            customData: PropTypes.number.isRequired
        }).isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    _increment = () => {
        this.setState((previousState) => ({
            counter: previousState.counter + 1
        }));
    };

    _decrement = () => {
        this.setState((previousState) => ({
            counter: previousState.counter - 1
        }));
    };

    _isMyMessage() {
        return (JSON.parse(localStorage.getItem('userEmail'))) === (this.props.item.createdBy);
    }

//https://bootsnipp.com/snippets/featured/simple-chat
    render() {
        let deleteButton = null;
        if (this._isMyMessage()){
            deleteButton = <i className="glyphicon glyphicon-remove pull-right" aria-hidden="true"
                              onClick={() => this.props.onDelete(this.props.item.id)}/>
        }
        console.log(this._isMyMessage());
        return <li style={{width: "100%"}}>
            <div className="message msj-rta macro">
                <div className="text text-l">
                    <p>
                        <small>{this.props.item.createdBy} - {this.props.item.createdAt}</small>
                    </p>
                    <p>{this.props.item.value}</p>
                </div>
                <p className="numberCircle">{this.state.counter}</p>
                <button
                    type="button"
                    onClick={this._increment}
                    className="btn btn-primary">
                    <span className="glyphicon glyphicon-upload"/>
                </button>
                <button
                    type="button"
                    onClick={this._decrement}
                    className="btn btn-primary">
                    <span className="glyphicon glyphicon-download"/>
                </button>
                {deleteButton}
            </div>
        </li>;
    }
}