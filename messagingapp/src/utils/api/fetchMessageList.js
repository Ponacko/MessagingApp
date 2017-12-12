import {validateResponse} from './validateResponse';
import {API_CHANNEL_URI} from '../../constants/api';

export const fetchMessageList = (token, channel) => {
    return fetch(
        `${API_CHANNEL_URI}/${channel.id}/message`,
        {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': `application\json`,
            }
        })
        .then(validateResponse);
}