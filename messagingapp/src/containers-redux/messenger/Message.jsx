import {downvoteMessage, upvoteMessage} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {Message} from "../../components/messenger/Message";
import {deleteMessageApi} from "../../actions/shared/deleteMessage";


const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteMessageApi(ownProps.channel, ownProps.item))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(Message);

export {connectedComponent as Message}