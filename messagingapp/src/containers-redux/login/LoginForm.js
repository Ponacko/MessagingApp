import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {LoginForm} from '../../components/login/LoginForm.jsx';
import {authenticateUser} from '../../actions/shared/authenticateUser';
import {registerUser} from "../../actions/shared/registerUser";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (email) =>
        dispatch(authenticateUser(ownProps.from, email)),
    onRegister: (email) => dispatch(registerUser(ownProps.from, email))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(LoginForm);

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export {connectedComponent as LoginForm};