import React from 'react';
import PropTypes from 'prop-types'

export class ChannelEditedItem extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        onCancel: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            editedItem: props.item
        };
    }

    _onTitleChange = (event) => {
        const value = event.target.value;

        this.setState((previousState) => ({
            editedItem: {
                ...previousState.editedItem,
                title: value
            }
        }));
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.item !== nextProps.item) {
            this.setState({
                editedItem: nextProps.item,
            });
        }
    }

    render(){
        return (
            <a href="#" className="list-group-item list-group-item-action disabled">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Name</label>
                        <input type="text" className="form-control" id="title" value={this.state.editedItem.title}
                               onChange={this._onTitleChange}/>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => this.props.onSave(this.state.editedItem)}>
                        Save
                    </button>
                    <button className="btn btn-default btn-sm" onClick={this.props.onCancel}>Cancel</button>
                </form>
            </a>
        )
    }
}