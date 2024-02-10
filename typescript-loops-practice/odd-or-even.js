"use strict";
/* exported oddOrEven */
function oddOrEven(numbers) {
    let newArray = [];
    {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) { //if numbers in the array are divisible by 2
                newArray.push('even'); //push the string"even" into our new array
            }
            else {
                newArray.push('odd'); //if the numbers in the array or not even, push "odd" string.
            }
            ;
        }
        ;
        return newArray;
    }
}
