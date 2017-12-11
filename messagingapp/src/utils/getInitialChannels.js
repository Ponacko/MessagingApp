import * as Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import {initializeChannels} from "../actions/shared/getAppData";

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
    return JSON.parse(initializeChannels());
};