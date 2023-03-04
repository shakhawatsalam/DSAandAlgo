
// 167. Tow Sum || - input Array is Sorted
let numbers = [2, 7, 11, 15];
var twoSum = function (numbers, target) {
    let lower = 0;
    let upper = numbers.length - 1;


    while (lower < upper) {
        let sum = numbers[lower] + numbers[upper]; 
        if (sum < target) {
            lower++;
        } else if (sum > target) {
            upper--;
        } else {
            return [lower + 1, upper + 1];
        }
    }
};


console.log(twoSum(numbers, 9));





