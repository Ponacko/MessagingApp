import {validateResponse} from './validateResponse';
import {API_APP_URI} from '../../constants/api';

export const fetchCreateChannel = (token, channel, owner) => {
    const jsonBody = [
        {
            path: `/channels/-`,
            op: 'add',
            value : {
                name : `${channel.name}`,
                customData : `${owner}`
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