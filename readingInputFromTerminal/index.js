// Import required module
const readline = require("readline");

function maxOfTwo(n1,n2){
  if(n1>n2){
    console.log("the maximum number is:",n1);
  }else{
    console.log("the maximum number is:",n2);
  }
}
const Solution = () => {
  // Write your code here
  const enter = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });

  enter.question("provide first number ", (num1)=>{
    enter.question("provide second number ",(num2)=>{
      console.log(maxOfTwo(num1,num2));
    })
  })
};

Solution();
module.exports = Solution;
