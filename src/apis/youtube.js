import axios from "axios";
import keys from "../../config/keys";

const KEY = keys.YTKey;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
