import {validateResponse} from './validateResponse';
import {API_APP_URI} from '../../constants/api';

export const fetchUpdateChannel = (token, channel) => {
    const jsonBody = [
        {
            path: `/channels/${channel.id}`,
            op: 'replace',
            value : {
                id : `${channel.id}`,
                name : `${channel.name}`
            }

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