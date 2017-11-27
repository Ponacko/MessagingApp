import { connect } from 'react-redux';
import { MessagePanel } from '../components/MessagePanel';

import {sendMessage, changeInput, createNewMessage} from '../actions/actionCreators';

const mapStateToProps = (state) => ({
    message: state.chatApp.messagePanel,
});

const mapDispatchProps = (dispatch) => ({
   //onSend: (message) => dispatch(createNewMessage(message)),
   onChange: (event) => dispatch(changeInput(event)),
});

const enhancer = connect(mapStateToProps, mapDispatchProps);
const connectedComponent = enhancer(MessagePanel);

export { connectedComponent as MessagePanel }