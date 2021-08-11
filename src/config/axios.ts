import axios from 'axios'

axios.defaults.headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'Access-Control-Allow-Origin': true,

}
export default axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 10000
});

export const graphicRequest = axios.create({
    baseURL: process.env.REACT_APP_GRAPHIC_URL,
    timeout: 10000
});