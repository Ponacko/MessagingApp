import connect from "react-redux/es/connect/connect";
import {createNewMessage} from "../actions/actionCreators";
import {MessageList} from "../components/MessageList";

const mapStateToProps = (state) => ({
    list: state.chatApp.messageList
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNew: (message) => dispatch(createNewMessage(message)),
})

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageList);

export {connectedComponent as MessageList}