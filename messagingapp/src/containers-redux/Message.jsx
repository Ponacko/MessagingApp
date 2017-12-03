import {deleteMessage} from "../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {Message} from "../components/Message";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteMessage(ownProps.item.id))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(Message);

export {connectedComponent as Message}