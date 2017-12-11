export const convertToServerChannelCreate = (channel) => [
    {
        path: '/channels/-',
        op: 'add',
        value: {
            name: channel.name
        }
    }
];