import * as React from 'react';
import * as PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

class LoginForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
        };
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onRegister: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.setState(() => ({componentId: uuidv4()}));
    }

    _onChangeEmail = (event) => {
        const value = event.target.value;

        this.setState(() => ({
                email: value
            }
        ));
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label className="sr-only">E-mail</label>
                    <div className="input-group">
                        <div className="input-group-addon">
                            <span className="glyphicon glyphicon-envelope" aria-hidden="true"/>
                        </div>
                        <input className="form-control" type="email" placeholder="undefined@null.zero"
                               onChange={this._onChangeEmail}
                               value={this.state.email}
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-success btn-lg"
                        onClick={() => this.props.onSubmit(this.state.email)}>Log in
                </button>
                <button type="button" className="btn btn-primary btn-lg"
                        onClick={() => this.props.onRegister(this.state.email)}>Register
                </button>
            </form>
        );
    }
}

export {LoginForm};