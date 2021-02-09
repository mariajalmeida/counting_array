window.addEventListener("DOMContentLoaded", actionBegins);

function actionBegins() {
    console.log("sup");

    let number = 0;
    let speed = 100;
    const array = [];

    const int = setInterval(res => {
        number++;
        if (number <= 9) {
            number = number.toString();
            array.unshift(number);
            console.log(array);
        } else {
            console.log("done");
            clearInterval(int);
        }
    }, speed);
}