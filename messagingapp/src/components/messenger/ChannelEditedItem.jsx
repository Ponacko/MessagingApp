import React from 'react';
import PropTypes from 'prop-types'

export class ChannelEditedItem extends React.Component {
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

    render() {
        return (
            <div href="#" className="list-group-item list-group-item-action">
                <i className="glyphicon glyphicon-chevron-up pull-left" aria-hidden="true"
                   onClick={this.props.onCancel}/>
                <div className="form-group">
                    <label htmlFor="title">Name</label><br/>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" value={this.state.editedItem.title}
                               onChange={this._onTitleChange}/>
                    </div>
                    <i className="btn btn-primary glyphicon glyphicon-ok pull-right"
                       onClick={() => this.props.onSave(this.state.editedItem)}/>
                    <br/>

                </div>
            </div>
        )
    }
}