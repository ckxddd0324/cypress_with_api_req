// getData.mjs
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";
// Function to make an API call and return JSON data
export const getPosts = async () => {
  try {
    // Make a GET request to the API
    const response = await axios.get(baseUrl + "/todos/1");

    // Log the JSON response
    console.log("Data received:", response.data);
    return response;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error.message);
  }
};

export const createPost = async (obj) => {
  try {
    // Make a GET request to the API
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { name: obj.name }
    );

    // Log the JSON response
    console.log("Data received:", response.data);
    console.log("Data received:", response.status);
    return response;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error.message);
  }
};
