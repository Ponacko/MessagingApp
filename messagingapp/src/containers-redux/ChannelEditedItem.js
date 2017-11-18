import {cancelEditingChannel, updateChannel} from "../actions/actionCreators";
import {ChannelEditedItem} from "../components/ChannelEditedItem";
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = (dispatch) => ({
    onSave: (channel) => dispatch(updateChannel(channel)),
    onCancel: () => dispatch(cancelEditingChannel())
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(ChannelEditedItem);

export {connectedComponent as ChannelEditedItem};