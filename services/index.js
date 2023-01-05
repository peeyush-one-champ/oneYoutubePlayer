import axios from 'axios';

export const getVideoURL = url => {
    return axios.get(`http://192.168.0.163:9000/download?url=${url}`);
};
