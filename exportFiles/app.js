// Note:  Please do not change the pre-written code

// import the required module here
const math = require("./math");

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
   const arrSum =  math.sum(nums);
    const arrMean = math.mean(nums);
    console.log("sum of an array ",arrSum,"\tmean of an array ",arrMean);


};
Solution();
module.exports = Solution;
