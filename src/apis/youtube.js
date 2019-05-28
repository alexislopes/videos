import axios from 'axios';

const KEY = "AIzaSyDVe1ehBZRnQ5U9GjWEepc1tZGXZ0qThbw";


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    
  }
})