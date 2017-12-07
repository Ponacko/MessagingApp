const API_URI = 'https://pv247messaging.azurewebsites.net/api/';

export const API_AUTH_URI = `${API_URI}auth`;
const API_APP_ID = '90dc6084-593f-404a-9f69-e1a902d01029';

export const API_FILE_URI = `${API_URI}/file`;
export const createApiUserUri = (userEmail) => `${API_URI}${API_APP_ID}/user/${userEmail}`;
export const createApiFilerUri = (fileId) => `${API_URI}file/${fileId}/download-link`;

export const USER_EMAIL = 'undefined@null.zero';