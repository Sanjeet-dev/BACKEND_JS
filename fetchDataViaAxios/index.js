// Import required module
const axios = require("axios");

const Solution = () => {
  // Write your code here
  const fetchData = async() =>{
    try{
    const response = await axios.get("https://api.codingninjas.com/api/v3/event_tags");
      console.log(response.data);

    }catch(error){
      console.log("Something went wrong!",error);
    }

  }
  fetchData();
};

Solution();
module.exports = Solution;
