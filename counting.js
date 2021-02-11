"use strict";

window.addEventListener("DOMContentLoaded", actionBegins);

function actionBegins() {
    console.log("sup");

    let number = 0;
    let speed = 1000;
    const array = [];

    const int = setInterval(res => {
        // one more number every time it loops through
        number++;
        // don't let it go over 30
        if (number <= 30) {
            // transform it into a string
            number = number.toString();
            // add elements to the beginning of an array
            array.unshift(number);
            if (number >= 10)
                // remove the last element from an array
                console.log(array.pop());
            console.log(array);
        } else {
            console.log("done");
            clearInterval(int);
        }
    }, speed);
}