import {validateResponse} from './validateResponse';
import {API_APP_URI} from '../../constants/api';

export const fetchDeleteChannel = (token, channel) => {
    const jsonBody = [
        {
            path: `/channels/${channel.id}`,
            op: 'remove'
        }
    ];
    console.log(jsonBody);
    return fetch(
        API_APP_URI,
        {
            method: 'PATCH',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': `application\json`,
            },
            body: JSON.stringify(jsonBody),
        })
        .then(validateResponse);
};