import connect from "react-redux/es/connect/connect";
import {MessageList} from "../../components/messenger/MessageList";
import {sendMessageApi} from "../../actions/shared/sendMessage";

const mapStateToProps = (state) => ({
    channel: state.chatApp.selectedChannel,
    list: state.chatApp.messageList
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNew: (channel, message) => dispatch(sendMessageApi(channel, message)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageList);

export {connectedComponent as MessageList}