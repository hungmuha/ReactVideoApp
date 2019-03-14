import axios from "axios";


const KEY = 'AIzaSyCyHGytwCi6W3rc5X9Df4AZbiaYezpzXzs';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:"snippet",
        maxResult: 5,
        key: KEY
    }
});

