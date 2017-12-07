import {validateResponse} from "./validateResponse";
import {API_USER_URI} from "../../constants/api";

export const fetchRegisterUser = (email) =>

    fetch(
        API_USER_URI,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "email" : `${email}`,
                "customData" : ""
            })
        })
        .then(validateResponse);