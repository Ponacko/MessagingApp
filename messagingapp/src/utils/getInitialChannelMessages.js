import * as Immutable from "immutable";

import {getInitialSelectedChannel} from "./getInitialSelectedChannel";


export const getInitialChannelMessages = (channel = getInitialSelectedChannel()) => {
    let storedListJSON = null;
    if (channel) {
        console.log('list to' + channel.title);
        storedListJSON = localStorage.getItem('messages' + channel.id);
        console.log('loading messages' + channel.title);
    }
    return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : Immutable.List();

};