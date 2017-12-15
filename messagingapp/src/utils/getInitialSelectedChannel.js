import uuidv4 from 'uuid/v4';

export const defaultChannel = {
    id: uuidv4(),
    title: "Empty channel"
};


export const getInitialSelectedChannel = () => {
    const storedJSON = localStorage.getItem('selectedChannel');
    console.log("loaded "+ storedJSON);
    return storedJSON ? JSON.parse(storedJSON) : defaultChannel;
};