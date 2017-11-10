import React from 'react';
import PropTypes from 'prop-types';

export class ChannelItem extends React.Component{

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        onDelete: PropTypes.func.isRequired,
        onExpand: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render(){
        return (
            <div>
                <a href="#" className="list-group-item list-group-item-action"
                   onClick={this.props.onClick}
                >
                    <i className="glyphicon glyphicon-edit" aria-hidden="true"
                       onClick={() => this.props.onExpand(this.props.item.id)}/>
                    {' '}{this.props.item.title}{' '}
                    <i className="glyphicon glyphicon-remove" aria-hidden="true"
                       onClick={() => this.props.onDelete(this.props.item.id)}/>
                </a>
            </div>
        );
    }
}