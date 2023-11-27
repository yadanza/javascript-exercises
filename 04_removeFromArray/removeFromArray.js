const filteredArray = []
const removeFromArray = function(arr,num) {
let removeIndex = arr.indexOf(num)
return filteredArray.concat(arr.slice(0, removeIndex).concat(arr.slice(removeIndex + 1)))
};

console.log(removeFromArray([1,2,3,4,5,6], 4))

// Do not edit below this line
module.exports = removeFromArray;
