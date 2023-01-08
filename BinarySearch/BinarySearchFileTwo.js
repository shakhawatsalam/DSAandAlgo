// 2089. Find Target Indices After Sorting Array

let target = 6;
let nums = [48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38];
let tergetIndices = function (nums, target) {
    let sortedArray = nums.sort();
    let output = [];
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === target) {
            output.push(i)

        }
    }
    return output;
};



// console.log(tergetIndices([1, 2, 5, 2, 3], 2));
// console.log(tergetIndices([1, 2, 5, 2, 3], 3));
// console.log(tergetIndices([1, 2, 5, 2, 3], 5));
// console.log(tergetIndices(nums, target));

// Sorting Buildin Function Accpet kora na

// =============  END  ================>>>>

// 1539. Kth Missing Positive Number
let arr = [2];
let k = 1;
let missingArray = [];

let number = 1;
let i = 0;

while (true) {
    if (number === arr[i]) {
        i++;
        number++;
    } else {
        missingArray.push(number);
        number++;

        if (missingArray.length > k) break;
    }
}

console.log(missingArray[k - 1]);


// var findKthPositive = function(arr, k) {
//     let prev = 0;
//     for(let i = 0; i < arr.length; i++) {
//         console.log("i am arr[i]",arr[i])
//         const diff = arr[i] - prev - 1;
//         console.log("i am diff",diff);
//         if (k > diff) {
//             console.log("I am k ar man ==",k)
//             k = k - diff;
//         }else return prev + k;
//         prev = arr[i];
//         console.log("i am ans",prev + k);
//     }
//     return prev + k
// };

// console.log("result----->",findKthPositive([2,3,4,7,11],5));

// ===============================>>>>>
// need to undrestant the above code
// =============================>>>>