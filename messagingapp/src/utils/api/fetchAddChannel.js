import {validateResponse} from './validateResponse';
import {API_APP_URI} from '../../constants/api';

export const fetchAddChannel = (token, channel) => {
    const op = (channel.id !== null) ? "replace" : "add";
    const id = (channel.id !== null) ? channel.id : "-";
    const jsonBody = [
        {
            path: `/channels/${id}`,
            op: `${op}`,
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