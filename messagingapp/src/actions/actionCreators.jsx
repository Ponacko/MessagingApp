import uuidv4 from 'uuid/v4';
import {
    CHANNEL_ITEM_CREATE
} from '../constants/actionTypes';

export const createNewItem = (newItem) => ({
    type: CHANNEL_ITEM_CREATE,
    payload: {
        item: {
        ...newItem,
        id: uuidv4(),
        },
    }
});