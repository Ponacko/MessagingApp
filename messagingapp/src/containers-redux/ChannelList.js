import {
    cancelEditingChannel, createNewChannel, deleteChannel, startEditingChannel, switchChannel,
    updateChannel
} from "../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {ChannelList} from "../components/ChannelList";

const mapStateToProps = (state) => ({
    list: state.chatApp.channelList,
    editedChannelId: state.chatApp.editedChannelId,
    selectedChannel: state.chatApp.selectedChannel
});

const  mapDispatchToProps = (dispatch) => ({
    onCreateNew: (channel) => dispatch(createNewChannel(channel)),
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onSelectChannel: (channel) => dispatch(switchChannel(channel))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export {connectedComponent as ChannelListRedux};

