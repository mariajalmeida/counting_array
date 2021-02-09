window.addEventListener("DOMContentLoaded", actionBegins);

function actionBegins() {
    console.log("sup");

    let number = 0;
    let speed = 100;

    const int = setInterval(function () {
        number++;
        if (number <= 20) {
            console.log(number);
        } else {
            console.log("done");
            clearInterval(int);
        }
    }, speed);
}