/**
 * @param {string} num
 * @return {string}
 */
// Solution #2 - Not converting to array compare to solution #1
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 !== 0) return num.slice(0, i + 1);
  }

  return '';
};

// Solution #1
// var largestOddNumber = function(num) {
//     const arr = num.split('');

//     for (let i = arr.length-1; i >= 0; i--) {
//         if (arr[i] % 2 !== 0) return arr.slice(0,i+1).join('');
//     }

//     return "";

// };
