import {push} from "connected-react-router";
import {fetchAddChannel} from "../../utils/api/fetchAddChannel";

export const addChannel = (destinationLocation, token, channel) =>
    (dispatch) => {
        return fetchAddChannel(token, channel)
            .then(() => {
                dispatch(push(destinationLocation));
            })
            .catch((error) => {
                console.log(error)
            });
    };