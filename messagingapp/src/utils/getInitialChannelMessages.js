import * as Immutable from "immutable";
import uuidv4 from 'uuid/v4';

export const defaultChannel = {
        id: uuidv4(),
        title: "Empty channel"
    };

export const getInitialChannelMessages = (channel = defaultChannel) => {
    let storedListJSON = null;
    if (channel) {
        console.log('list to' + channel.title);
        storedListJSON = localStorage.getItem('messages' + channel.id);
        console.log('loading messages' + channel.title);
    }
    return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : Immutable.List();

};