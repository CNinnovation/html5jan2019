window.onload = function () {
    alert("load");
    // window loaded - better: use DOMContentLoaded on document
};


document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.getElementById('button1');
    //button1.addEventListener('click', function () {
    //    calladd();
    //});
    button1.onclick = function () {
        calladd();
    };
})

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function calladd() {
    let result = add(33, 9);
    console.log(result);
    alert(result);
}