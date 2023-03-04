// TowPointer Algorithm => class-2;

//  832. Flipping an image Problem
let image = [[1, 1, 0], [1, 0, 1], [0, 0, 0,]]

function flippingAnImage(image) {

    for (let i = 0; i < image.length; i++) {
        let l = 0;
        let r = image[i].length - 1;
        console.log(r)
        while (l < r) {
            let temp = image[i][l];
            image[i][l] = image[i][r];
            image[i][r] = temp;
            l++;
            r--
        }

    }
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) {
                image[i][j] = 1;

            } else {
                image[i][j] = 0;
            }
        }
    }
    return image;
};



console.log(flippingAnImage(image));

// 167. Tow Sum || - input Array is Sorted

//

console.log("hello worldddddddd");
