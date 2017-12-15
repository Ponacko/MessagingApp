import {startEditingChannel, switchChannel} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {ChannelList} from "../../components/messenger/ChannelList";
import {initializeChannels} from "../../actions/shared/getAppData";
import {createChannelApi} from "../../actions/shared/addChannel";
import {getMessages} from "../../actions/shared/getMessages";

const mapStateToProps = (state) => ({
    list: state.chatApp.channelList,
    editedChannelId: state.chatApp.editedChannelId,
    selectedChannel: state.chatApp.selectedChannel
});

const  mapDispatchToProps = (dispatch) => ({
    onInitialize: () => dispatch(initializeChannels()),
    onCreateNew: (channel) => dispatch(createChannelApi(channel)),
    onStartEditing: (id) => dispatch(startEditingChannel(id)),
    onSelectChannel: (channel) => {
        localStorage.setItem('selectedChannel', JSON.stringify(channel));
        dispatch(switchChannel(channel));
        dispatch(getMessages(channel))
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export {connectedComponent as ChannelListRedux};

