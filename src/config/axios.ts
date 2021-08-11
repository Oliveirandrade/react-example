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
