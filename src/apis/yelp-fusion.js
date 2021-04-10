import axios from "axios";

// Yelp Fusion authentication
const KEY =
	"P0ijk2yDNq50z9A6wcVkf1JbYxs8FGrGbK60_wMvOL1N8CyWm0hxq5tCV00S5Gidt7HBWK695UxADs47ETs7knV6kXMjM_4XFdN8sIMoI3-HbmtWXNh0Df-OjApxYHYx";

// Our Yelp Fusion code that sends a GET request
export default axios.create({
	baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3",
	headers: {
		Authorization: `Bearer ${KEY}`
	}
});
