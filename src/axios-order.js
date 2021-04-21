import axios from 'axios';

const instance = axios.create(

    {
        baseURL: 'https://test-laboratory-3a95f-default-rtdb.firebaseio.com/'
    }

);

export default instance;