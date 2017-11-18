import {createNewChannel, deleteChannel, updateChannel} from "../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {ChannelList} from "../components/ChannelList";

const mapStateToProps = (state) => ({
    list: state.chatApp.channelList,
});

const  mapDispatchToProps = (dispatch) => ({
    onCreateNew: (channel) => dispatch(createNewChannel(channel)),
    onUpdate: (channel) => dispatch(updateChannel(channel)),
    onDelete: (id) => dispatch(deleteChannel(id))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export {connectedComponent as ChannelListRedux};

