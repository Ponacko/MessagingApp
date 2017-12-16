import {downvoteMessage, upvoteMessage} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {Message} from "../../components/messenger/Message";
import {deleteMessageApi} from "../../actions/shared/deleteMessage";
import {changeVote} from "../../actions/shared/changeVote";


const mapDispatchToProps = (dispatch, ownProps) => ({
    onUpvote: () => dispatch(changeVote(ownProps.channel, ownProps.item, 1)),
    onDownvote: () => dispatch(changeVote(ownProps.channel, ownProps.item, -1)),
    onDelete: () => dispatch(deleteMessageApi(ownProps.channel, ownProps.item))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(Message);

export {connectedComponent as Message}