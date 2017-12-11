import {startEditingChannel} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {ChannelItem} from "../../components/messenger/ChannelItem";
import {deleteChannelApi} from "../../actions/shared/deleteChannel";

const mapStateToProps = (state) => ({
    expandDisabled:  !!state.editedChannelId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteChannelApi(ownProps.item)),
    onExpand: () => dispatch(startEditingChannel(ownProps.item.id))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelItem);

export {connectedComponent as ChannelItem}