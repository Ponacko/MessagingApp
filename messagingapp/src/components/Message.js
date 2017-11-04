import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    };

    _sendOnClick = () => {

    }

    render(){
        var date = new Date();
        return(
            <div className="message">
                {date.toLocaleTimeString()}{' : '}{this.props.item.title}
            </div>
        );
    }
}