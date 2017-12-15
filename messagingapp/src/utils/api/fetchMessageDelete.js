import {validateResponse} from './validateResponse';
import {API_CHANNEL_URI} from '../../constants/api';

export const fetchMessageDelete = (token, channel, message) => {
    return fetch(
        `${API_CHANNEL_URI}/${channel.id}/message/${message.id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': `application\json`,
            }
        })
        .then(validateResponse);
};