import {cancelEditingChannel} from "../../actions/actionCreators";
import {ChannelEditedItem} from "../../components/messenger/ChannelEditedItem";
import connect from "react-redux/es/connect/connect";
import {addChannel} from "../../actions/shared/addChannel";

const mapDispatchToProps = (dispatch) => ({
    onSave: (channel) =>  dispatch(addChannel(channel)),
    onCancel: () => dispatch(cancelEditingChannel())
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(ChannelEditedItem);

export {connectedComponent as ChannelEditedItem};