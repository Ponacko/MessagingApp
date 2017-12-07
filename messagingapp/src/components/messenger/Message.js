import React from 'react';
import PropTypes from 'prop-types';
require.context('../../../static/', true);

export class Message extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            counter: props.item.counter
        };
    }

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            datum: PropTypes.string,
            counter: PropTypes.number.isRequired
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

//https://bootsnipp.com/snippets/featured/simple-chat
    render(){
        return <li style={{width: "100%"}}>
            <div className="message msj-rta macro">
                <div className="avatar">
                    <img className="img-circle" style={{width:"100%"}} src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/p40x40/11224381_10204322255883571_4459390670064219588_n.jpg?oh=b3f6079322c4ca97b1abce5989814eb2&oe=5AD61568" />
                </div>
                <div className="text text-l">
                    <p>
                        <small>{this.props.item.datum}</small>
                    </p>
                    <p>{this.props.item.title}</p>
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
                <i className="glyphicon glyphicon-remove pull-right" aria-hidden="true"
                   onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        </li>;
    }
}