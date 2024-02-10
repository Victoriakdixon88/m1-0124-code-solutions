"use strict";
/* exported filterOutNulls */
function filterOutNulls(values) {
    const filteredArray = []; //unknown values in our values array.
    for (let i = 0; i < values.length; i++) { //if our values are less than the length of the array, increment one
        if (values[i] !== null) { //if our values in the array are NOT equal to null,
            filteredArray.push(values[i]); //push our values inside our array into a new filtered array, omitting our nulls
        }
    }
    return filteredArray;
}
;
