// ==== Two Pointer Algo Class Problem =====

// let numbers = [5, 4, 9, 2, 1, 0, 12, 7];
// let lastNumber = numbers.length - 1;
// let temp;
// for (let i = 0, k = lastNumber; i <= k; i++, k--){
//     console.log(numbers[i]);
//     console.log(numbers[k])
//     temp = numbers[i];
//     console.log(temp)
//     numbers[i] = numbers[k];
//     console.log(numbers[i]);
//     console.log(numbers[k]);
//     numbers[k] = temp;
//     console.log(temp);
// };

// console.log(numbers); //Output:- [7, 12, 0, 1, 2, 9, 4, 5];

// let arr = [5, 4, 9, 2, 1, 0, 12, 7];
// let lastNumber = arr.length - 1;
// function SoftwareEng(arr) {

//     console.log(lastNumber);
//     for (let i = 0; i < arr.length - 1; i++){
//         console.log(i)
//         for (let j = lastNumber; i <= j; j--){
//             console.log(j);
//             console.log(arr[j]);
//             console.log(arr[i]);
//             // break;
//         }

//     };
//     return arr;
// }

// console.log(SoftwareEng(arr));


//<<========== From Apna College ==========>>

// <<========== Bubble Sort ==========>>

let arr = [7, 8, 3, 1, 2];
// i = 0;
// 1st = [7, 8, 3, 1, 2]; 0 = j
// 2st = [7, 3, 8, 1, 2]; 1 = j
// 3st = [7, 3, 1, 8, 2]; 2 = j
// 4st = [7, 3, 1, 2, 8]; 3 = j
// off == 4 < 4
// i = 1;
//  1st = [3, 7, 1, 2, 8]; 0 = j
//  1st = [3, 1, 7, 2, 8]; 1 = j
//  1st = [3, 1, 2, 7, 8]; 2 = j
// i = 2
// 1st = [1, 3, 2, 7, 8]; 0 = j
// 1st = [1, 2, 3, 7, 8]; 0 = j

function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {   // for both loop arr.length is """5"""
            console.log(i)
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            };
        };
    };
    return arr;
}
// console.log(BubbleSort(arr)); // Output:-- [1, 2, 3, 7, 8];
// Time complexity ==  o(n^2);


//<<==========Selection Sort ==========>>

// let arr = [7, 8, 3, 1, 2]; // arr.length -----> 5
// // [1, 8, 3 ,7, 2]
// // [1, 2, 3 ,7, 8]

// function SelectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let smallest = i;
//         // console.log(i)
//         // console.log(smallest);
//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[smallest] > arr[j]) {
//                 smallest = j;  // 3
//             }
//         }

//         let temp = arr[smallest]; 1
//         arr[smallest] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }

// console.log(SelectionSort(arr), "ANS");  // Output:-- [1, 2, 3, 7, 8];
// Time complexity ==  o(n^2);





// <========== Insertion Sort ==========>>

// let arr = [7, 8, 3, 1, 2];
// 0, 1, 2, 3, 4
//insertion sort
// for (let i = 1; i < arr.length; i++){
//     let current = arr[i]; console.log(current);
//     let j = i - 1;
//     console.log(j);
//     console.log(arr[j]);
//     while (j >= 0 && current < arr[j]) {
//         arr[j + 1] = arr[j];
//         j--;
//     };
//     //placement
//     arr[j + 1] = current;
// }
// console.log(arr);

/// Boja gasa kinto abar revise korta hobeaa..



// <========== Palindrome ==========>>
// 2108. Find First Palindromic String in the Array
// ==> This solution is from Two Pointer Algo Class.
// function isPlindrome(str) {
//         let i = 0;
//         let k = str.length - 1;

//         while (i <= k) {
//                 if (str[i] != str[k]) {
//                         return false;
//                 }
//                 i++;
//                 k--;
//         }
//         return true;
// };

// function leetcode2108(arr) {
//         for (let i = 0; i < arr.length; i++) {
//                 if (isPlindrome(arr[i])) {
//                         return arr[i];
//                 }
//         }
//         return "";
// }

// console.log(leetcode2108(["abc", "car", "ada", "racecar", "cool"]));

// console.log(isPlindrome('madam'));
// console.log(isPlindrome('racecar'));
// console.log(isPlindrome('mom'));
// console.log(isPlindrome('dad'));
// console.log(isPlindrome('Shawon'));


// 2108. Find First Palindromic String in the Array
// => this solution is from let code.
// let words = ["abc", "car", "ada", "racecar", "cool"]
// var firstPalindrome = function (words) {
//         for (let i = 0; i < words.length; i++) {
//                 console.log(words[i]);
//                 const word = words[i];
//                 let isPalindromic = true;
//                 console.log(word.length);
//                 for (let j = 0; j < word.length / 2; j++) {
//                         if (word[j] !== word[word.length - j - 1]) {
//                                 isPalindromic = false;
//                                 break;
//                         };
//                 };
//                 if (isPalindromic) return word;
//         };
//         return '';
// };

// console.log(firstPalindrome(words));  //need to undrestand again


//Class Nubmer__5 Tow pointer Algorithm assignment Problem

//merging tow array and sort it

function addTwoArraysAndSort(arr1, arr2) {
    // merging the array
    let start = arr1.length;
    for (let i = 0; i < arr2.length; i++){
        arr1[start++] = arr2[i];
    };
    //Sorting the array with insertion sort
    for (let s = 1; s < arr1.length; s++){
        let current = arr1[s];
        let j = s - 1; 

        while (j >= 0 && current < arr1[j]) {
            arr1[j + 1] = arr1[j];
            j--;
        }
        arr1[j + 1] = current;
    }
    return arr1;
}


console.log(addTwoArraysAndSort([5, 10, 15, 20, 25, 30], [15,23,25,30,35]));

// Assignment problem is solved;