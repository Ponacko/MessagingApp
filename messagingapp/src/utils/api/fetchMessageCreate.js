import {validateResponse} from './validateResponse';
import {API_CHANNEL_URI} from '../../constants/api';

export const fetchMessageCreate = (token, channel, message) => {
    const jsonBody =
        {
            value : message.value
        };
    console.log(jsonBody);
    return fetch(
        `${API_CHANNEL_URI}/${channel.id}/message`,
        {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': `application\json`,
            },
            body: JSON.stringify(jsonBody),
        })
        .then(validateResponse);
}