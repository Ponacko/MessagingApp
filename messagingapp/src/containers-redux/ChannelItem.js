import {deleteChannel, startEditingChannel} from "../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import {ChannelItem} from "../components/ChannelItem";

const mapStateToProps = (state) => ({
    expandDisabled:  !!state.editedChannelId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteChannel(ownProps.item.id)),
    onExpand: () => dispatch(startEditingChannel(ownProps.item.id))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelItem);

export {connectedComponent as ChannelItem}