import React from 'react';
import PropTypes from 'prop-types'

export class ChannelEditedItem extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render(){
        return (
            <a href="#" className="list-group-item list-group-item-action disabled">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Name</label>
                        <input type="text" className="form-control" id="title" value={this.props.title}/>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={e => e.preventDefault()}>Save</button>
                    <button className="btn btn-default btn-sm" onClick={this.props.onCancel}>Cancel</button>
                </form>
            </a>
        )
    }
}