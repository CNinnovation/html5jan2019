﻿document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button1").onclick = callnoarrow;
    document.getElementById("button2").onclick = arrow;
});

function callnoarrow()
{
    var add = function (x, y) {
        return x + y;
    };

    return add(38, 4);
}

function arrow() {
    var add = (x, y) => x + y;

    return add(11, 31);
}