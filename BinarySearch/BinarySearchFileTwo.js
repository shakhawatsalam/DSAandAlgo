// 2089. Find Target Indices After Sorting Array

// let target = 6;
// let nums = [48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38];
// let tergetIndices = function (nums, target) {
//     let sortedArray = nums.sort();
//     let output = [];
//     for (let i = 0; i < sortedArray.length; i++) {
//         if (sortedArray[i] === target) {
//             output.push(i)

//         }
//     }
//     return output;
// };



// console.log(tergetIndices([1, 2, 5, 2, 3], 2));
// console.log(tergetIndices([1, 2, 5, 2, 3], 3));
// console.log(tergetIndices([1, 2, 5, 2, 3], 5));
// console.log(tergetIndices(nums, target));

// Sorting Buildin Function Accpet kora na

// =============  END  ================>>>>

// 1539. Kth Missing Positive Number
// let arr = [2];
// let k = 1;
// let missingArray = [];

// let number = 1;
// let i = 0;

// while (true) {
//     if (number === arr[i]) {
//         i++;
//         number++;
//     } else {
//         missingArray.push(number);
//         number++;

//         if (missingArray.length > k) break;
//     }
// }

// console.log(missingArray[k - 1]);


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



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 744. Find Smallest Letter Greater Than Target
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let ceilingArray = ["c","f","j"];


// function ceilingSearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid;
//     let result;
//     let ceil;
//     let aaa = arr[end] < target;
//     if (aaa) {
//         return 'target is too long'
//     }




//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             return `ceiling is ${arr[mid + 1]}`;
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//             console.log(arr[end] < target);
//         }
//         else {
//             ceil = arr[mid]
//             let floor = mid - 1;
//             result = arr[floor];
//             end = mid - 1;

//         }

//     };

//     return `ceiling of targer ${target} floor is ${result} ceiling is ${ceil}`;
// }


// console.log(ceilingSearch(ceilingArray, "c"));


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


// function ceilingSearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     console.log(end);
//     let mid;
//     let ceil;
//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             return `ceiling is   ${arr[mid]}`
//         } else if (arr[mid] < target) {
//             start = mid + 1;

//         } else {
//             ceil = arr[mid];
//             end = mid - 1;

//         };

//     };
//     return `ceil is ${ceil}`
// }


// console.log(ceilingSearch(arr, 95));


// let arr = ["c","f","j"];


// function ceilingSearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     if (arr[end] <= target) {
//         return arr[0];
//     }
//     let mid;
//     let ceil;
//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             return `ceiling is   ${arr[mid + 1]}`
//         }
//         else if (arr[mid] < target) {
//             start = mid + 1;

//         } else {
//             ceil = arr[mid];
//             end = mid - 1;

//         };

//     };
//     return ceil
// }


// console.log(ceilingSearch(arr, 'a'));




// var nextGreatestLetter = function (letters, target) {
//     console.log(letters);
//     console.log(target);
//     let start = 0;
//     let end = letters.length - 1;
//     if (letters[end] <= target) {
//         return letters[0];
//     }
//     let mid;
//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);
//         if (letters[mid] === target) {
//             for (let i = mid; i < letters.length; i++){
//                 if (letters[mid] < letters[i]) {
//                     return letters[i];
//                 }
//             }
//             return letters[mid + 1]
//         } else if (letters[mid] < target) {
//             start = mid + 1;

//         } else {
//             ceil = letters[mid];
//             end = mid - 1;

//         };

//     };
//     return ceil
// };

// console.log(nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"], "e"));


// =================================>>>
// 35. Search Insert Position
// =================================>>>

let arr = [1, 3, 5, 6];
let target = 7;
Output: 2

var searchInsert = function (nums, target) {
    console.log(nums);
    let low = 0;
    let high = nums.length - 1;
    let mid;
    // mid = Math.floor((high + low) / 2);
    // console.log(high);
    // console.log(mid);

    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1
        };

    }
    return low;
}

console.log(searchInsert(arr, target));
