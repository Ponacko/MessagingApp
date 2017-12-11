import {cancelEditingChannel} from "../../actions/actionCreators";
import {ChannelEditedItem} from "../../components/messenger/ChannelEditedItem";
import connect from "react-redux/es/connect/connect";
import {updateChannelApi} from "../../actions/shared/updateChannel";

const mapDispatchToProps = (dispatch) => ({
    onSave: (channel) =>  dispatch(updateChannelApi(channel)),
    onCancel: () => dispatch(cancelEditingChannel())
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(ChannelEditedItem);

export {connectedComponent as ChannelEditedItem};