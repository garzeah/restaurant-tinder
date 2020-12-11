import axios from "axios";

// Yelp Fusion authentication
const KEY =
  "qXKScxeUYgpGRRrGLf3fC_UCbSQMsczdCBqMKjM55IkjPQ0bkbhynb58TnRJFXLd0oWv8lRULvCp6VJ-ItTxFyPkzN6_qHSAUWCr8zT340Eput70UoPRHyyPAkxxX3Yx";

// Proxy
const proxyURL = "https://cors-anywhere.herokuapp.com/";

// Our Yelp Fusion code that sends a GET request
export default axios.create({
  baseURL: proxyURL + "https://api.yelp.com/v3",
  headers: {
    Authorization: `Bearer ${KEY}`,
    // "Access-Control-Allow-Origin": "*",
    // crossorigin: true,
  },
});
