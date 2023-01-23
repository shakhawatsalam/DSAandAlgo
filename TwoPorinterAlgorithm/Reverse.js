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

// let arr = [7, 8, 3, 1, 2];
// console.log(arr.length);
// function BubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         console.log(i)
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             console.log(i)
//             console.log(arr.length - i - 1);
//             console.log(j);
//             console.log(arr[j]);
//         console.log(arr[j + 1]);
//             if (arr[j] > arr[j + 1]) {
//                 //swap
//                 console.log(arr[j])
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             };
//         };
//     };
//     return arr;
// }

// console.log(BubbleSort(arr)); // Output:-- [1, 2, 3, 7, 8];
// Time complexity ==  o(n^2);


//<<==========Selection Sort ==========>>

let arr = [7, 8, 3, 1, 2];
console.log(arr.length);
function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let smallest = i;
        console.log(smallest);
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(i);
            // console.log(j);
    //  console.log(arr[smallest]);
            // console.log(arr[j]);
            if (arr[smallest] > arr[j]) {
                smallest = j;
                // console.log(smallest);
            }
        }
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(SelectionSort(arr));











