import {
    cancelEditingChannel, createNewChannel, deleteChannel, startEditingChannel,
    updateChannel
} from "../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {ChannelList} from "../components/ChannelList";

const mapStateToProps = (state) => ({
    list: state.chatApp.channelList,
    editedChannelId: state.chatApp.editedChannelId
});

const  mapDispatchToProps = (dispatch) => ({
    onCreateNew: (channel) => dispatch(createNewChannel(channel)),
    onUpdate: (channel) => dispatch(updateChannel(channel)),
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onCancelEditing: () => dispatch(cancelEditingChannel())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export {connectedComponent as ChannelListRedux};

