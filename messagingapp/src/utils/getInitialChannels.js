import * as Immutable from 'immutable';
import uuidv4 from 'uuid/v4';

const defaultChannels = Immutable.List([
    {
        id: uuidv4(),
        name: 'First channel'
    },
    {
        id: uuidv4(),
        name: 'Second channel'
    }
]);

export const getInitialChannels = () => {
    const storedListJSON = localStorage.getItem('channelList');
    return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : defaultChannels;
};