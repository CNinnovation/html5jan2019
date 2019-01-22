document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button1").onclick = fetchsample;
});


async function fetchsample() {
    let result = await fetch("/My/GetBook");
    let book = await result.json();
    console.log(book);
}