
// Linear Search  Example
// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];
// let array = ['red', 'green', 'blue', 'black', 'white', 'pink', 'yellow'];
// let target = 'red';

// function linearSearch(target, array) {

//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] === target) {
//             return `data found in index ${i}`;
//         }

//     }
//     return `not found`

// }
// console.log(linearSearch(target, array));
// this code time complexity in o(n);
// 1 sec -----> 10 lakh bar loop run


// -------------------------------------->>>
// -------------------------------------->>>
// Binary Search
// -------------------------------------->>>
// -------------------------------------->>>


// for binary search array is must be sorted;


// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];

// let target = 99;




// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid;

//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);


//         if (arr[mid] === target) {
//             return `data found at index of ${mid}`
//         }
//         else if (arr[mid] < target) {
//             start = mid + 1;
//             // mid = Math.floor((start + end) / 2);
//             console.log(start);

//         } else {
//             end = mid - 1;
//             // mid = Math.floor((start + end) / 2);
//             console.log(end);
//         }
//     };
//     return `data not found`

// }


// console.log(binarySearch(array, target));




// let array2 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

// let target2 = 100;


// function binarySearchOlta(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid;


//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);

//         if (target === arr[mid]) {
//             return `data found in ${mid}`;
//         }
//         else if (arr[mid] < target) {
//             console.log("i am in");
//             end = mid - 1;

//         } else {
//             console.log(`first`);

//             start = mid + 1;
//         }
//     };
//     return `~~~~~data not found`
// }

// console.log(binarySearchOlta(array2, 80));


// -------------------------------------->>>
// -------------------------------------->>>
// Ascending & Descending Order 
// -------------------------------------->>>
// -------------------------------------->>>
// let ascendingArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];

// let descendingArray = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];



// function ascendingDescendingArry(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid;
//     let asc;
//     if (arr[start] < arr[end]) {
//         asc = true;
//     } else {
//         asc = false;
//     }

//     while (start <= end) {
//         mid = Math.floor((start + end) / 2);

//         if (arr[mid] === target) {
//             return `Data found at Index ${mid}`;
//         }
//         console.log(asc);
//         if (asc) {
//             if (arr[mid] < target) {
//                 start = mid + 1;
//             } else {
//                 end = mid - 1;
//             }
//         } else {
//             if (arr[mid] < target) {
//                 console.log("hello");
//                 end = mid - 1
//             } else {
//                 start = mid + 1;
//             }
//         }
//     }
//     return -1;
// }


// console.log(ascendingDescendingArry(ascendingArray, 40));
// console.log(ascendingDescendingArry(descendingArray, 40));



// -------------------------------------->>>
// -------------------------------------->>>
// Flooring & ceiling
// -------------------------------------->>>
// -------------------------------------->>>


let ceilingArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


function ceilingSearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let result;
    let ceil;
    let aaa = arr[end] < target;
    if (aaa) {
        return 'target is too long'
    }
    

    

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return `ceiling is ${arr[mid]}`;
        } else if (arr[mid] < target) {
            start = mid + 1;
            console.log(arr[end] < target);
        }
        else {
            ceil = arr[mid]
            let floor = mid - 1;
            result = arr[floor];
            end = mid - 1;
         
        }
       
    };

    return `ceiling of targer ${target} floor is ${result} ceiling is ${ceil}`;
}


console.log(ceilingSearch(ceilingArray, 57));

// Read the comment 
// assignment problem number no last after flooring and ceiling



function countFunction(arrayCount,targerCount) {
    let count = 0;

    for (let i = 0; i <= arrayCount.length; i++) {
        if (arrayCount[i] === targerCount) {
            count++;
        }
    }
    return count;
};

console.log(countFunction([10,20,30,30,30,40,50,50,60,70], 30));