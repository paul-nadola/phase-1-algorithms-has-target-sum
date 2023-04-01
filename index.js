function hasTargetSum(array, target) {
  // Write your algorithm here

    const map = []
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      if (map[complement] !== undefined) {
        return true;
      }
      map[array[i]] = i;
    }
    return false;
  }
  




/* 
  Write the Big O time complexity of your function here
  O(n**2)
*/

/* 
  Add your pseudocode here
  Declare a function with two parameters
  declare an empty array called map
  initiate a for loop with a constant complement which is the result of
  target - array[i], this will be in map
  if the result is is the array then the condition is satisfied
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
