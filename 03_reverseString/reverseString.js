let reversed = ""

const reverseString = function(string) {
for(let i = 1; i < string.length + 1; i++){
    reversed += string.substr(-i, 1)
}

return reversed
};


// Do not edit below this line
module.exports = reverseString;
 