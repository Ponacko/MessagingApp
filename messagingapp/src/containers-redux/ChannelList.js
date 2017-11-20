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
    onStartEditing: (id) => dispatch(startEditingChannel(id))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export {connectedComponent as ChannelListRedux};

