import * as Immutable from 'immutable';
import uuidv4 from 'uuid/v4';

const defaultChannels = Immutable.List([
    {
        id: uuidv4(),
        title: 'First channel',
        messageList: Immutable.List()
    },
    {
        id: uuidv4(),
        title: 'Second channel',
        messageList: Immutable.List()
    }
]);

export const getInitialChannels = () => {
    const storedListJSON = localStorage.getItem('channelList');
    return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : defaultChannels;
};