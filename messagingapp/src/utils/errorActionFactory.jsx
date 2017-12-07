import uuidv4 from 'uuid/v4';

export const errorActionFactory = (actionType) =>
    (errorMessage, error = {}) => ({
        type: actionType,
        payload: {
            error: {
                id: uuidv4(),
                message: errorMessage,
                statusText: error.message,
                statusCode: error.statusCode,
            },
        }
    });