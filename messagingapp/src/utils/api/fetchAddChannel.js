import {validateResponse} from './validateResponse';
import {API_APP_URI} from '../../constants/api';

export const fetchAddChannel = (token, channel) => {
    console.log(channel);
    console.log(API_APP_URI);
    return fetch(
        API_APP_URI,
        {
            method: 'PATCH',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': `application\json`,
            },
            body: JSON.stringify([
                {
                    path: '/channels/-',
                    op: 'add',
                    value : {
                        name : `${channel.name}`
                    }

                }
            ]  ),
        })
        .then(validateResponse);
};