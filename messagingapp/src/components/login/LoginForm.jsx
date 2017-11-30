import * as React from 'react';
import * as PropTypes from 'prop-types';
import { uuid } from '../../utils/uuidGenerator';

class LoginForm extends React.PureComponent {
    static propTypes = {
        onSumbit: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.setState(() => ({ componentId: uuid() }));
    }

    render() {
        const { componentId } = this.state;
        const loginId = `${componentId}_login`;

        return (
            <form>
                <div className="form-group">
                    <label className="sr-only" htmlFor={loginId}>E-mail</label>
                    <div className="input-group">
                        <div className="input-group-addon">
                            <span className="glyphicon glyphicon-envelope" aria-hidden="true"/>
                        </div>
                        <input className="form-control" type="email" id={loginId} placeholder="undefined@null.zero" readOnly />
                    </div>
                </div>
                <button className="btn btn-success btn-lg" onClick={this.props.onSumbit}>Come on in</button>
            </form>
        );
    }
}

export { LoginForm };