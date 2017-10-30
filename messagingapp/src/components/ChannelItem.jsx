import React from 'react';
import PropTypes from 'prop-types';

export class ChannelItem extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        onDelete: PropTypes.func.isRequired
    };

    render(){
        return (
            <a href="#" className="list-group-item list-group-item-action">
                {this.props.item.title}{' '}
                <i className="glyphicon glyphicon-remove" aria-hidden="true"
                   onClick={() => this.props.onDelete(this.props.item.id)}/>
            </a>
        );
    }
}