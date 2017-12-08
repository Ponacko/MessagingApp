import {validateResponse} from './validateResponse';
import {API_APP_URI} from '../../constants/api';

export const fetchAddChannel = (token, channel) => {

    const op = (channel.id !== null) ? "replace" : "add";
    return fetch(
        API_APP_URI,
        {
            method: 'PATCH',
            headers: {
                'Authorization': `bearer ${token}`,
                'Accept': `application\json`,
            },
            body: JSON.stringify([
                {
                    "path": "/channels/-",
                    "op": op,
                    "value" : {
                        "id" : `${channel.id}`,
                        "name" : `${channel.name}`
                    }

                }
            ]  ),
        })
        .then(validateResponse);
};