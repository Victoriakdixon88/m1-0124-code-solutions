"use strict";
/* exported countdown */
function countdown(number) {
    const numberCountdown = [];
    while (number >= 0) {
        numberCountdown.push(number);
        number--;
    }
    return numberCountdown;
}
//why do we start the number >= 0? is it because we are counting down and we do not know how many numbers we are counting?
