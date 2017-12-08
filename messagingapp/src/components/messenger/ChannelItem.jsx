import React from 'react';
import PropTypes from 'prop-types';

export class ChannelItem extends React.Component{

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        onDelete: PropTypes.func.isRequired,
        onExpand: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render(){
        return (
            <div>
                <a className="list-group-item list-group-item-action" >
                    <i className="glyphicon glyphicon-chevron-down pull-left" aria-hidden="true"
                       onClick={() => this.props.onExpand(this.props.item.id)}/>
                    <div className="container col-lg-10 text-center" onClick={this.props.onClick}>
                    {' '}{this.props.item.name} {' '}
                    </div>
                    <i className="glyphicon glyphicon-remove pull-right" aria-hidden="true"
                       onClick={() => this.props.onDelete(this.props.item.id)}/>
                    <br/>
                </a>
            </div>
        );
    }
}