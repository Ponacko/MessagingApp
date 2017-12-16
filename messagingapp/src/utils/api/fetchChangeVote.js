import {validateResponse} from './validateResponse';
import {API_CHANNEL_URI} from '../../constants/api';

export const fetchChangeVote = (token, channel, message, email, vote) => {
    const jsonBody =
        {
            value: message.value,
            customData: JSON.stringify({...message.customData, votedBy: message.customData.votedBy.set(email, vote)}
            )
        };

    console.log(jsonBody);
    return fetch(
        `${API_CHANNEL_URI}/${channel.id}/message/${message.id}`,
        {
            method: 'PUT',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': `application\json`,
            },
            body: JSON.stringify(jsonBody),
        })
        .then(validateResponse);
};