import {MESSAGE_DOWNVOTE, MESSAGE_UPVOTE} from "../constants/actionTypes";


export const message = (prevState = 0, action) => {
    switch (action.type){
        case MESSAGE_UPVOTE:
            console.log(prevState);
            return prevState + 1;
        case MESSAGE_DOWNVOTE:
            return prevState - 1;
        default:
            return prevState;
    }
};