
import axios from 'axios';

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

// This does not seems to work: it does not override the default value
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
