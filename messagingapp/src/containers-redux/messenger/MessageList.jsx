import connect from "react-redux/es/connect/connect";
import {createNewMessage} from "../../actions/actionCreators";
import {MessageList} from "../../components/messenger/MessageList";

const mapStateToProps = (state) => ({
    channel: state.chatApp.selectedChannel,
    list: state.chatApp.messageList
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNew: (message) => dispatch(createNewMessage(message)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageList);

export {connectedComponent as MessageList}