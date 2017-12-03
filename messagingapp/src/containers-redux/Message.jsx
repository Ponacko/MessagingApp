import {deleteMessage, downvoteMessage, upvoteMessage} from "../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {Message} from "../components/Message";

const mapStateToProps = (state) => ({
    counter : state.chatApp.message
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteMessage(ownProps.item.id)),
    onUpVote: () => dispatch(upvoteMessage()),
    onDownVote: () => dispatch(downvoteMessage())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Message);

export {connectedComponent as Message}