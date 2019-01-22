function resolveafter5Seconds() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('foo');
        }, 5000);
    });
}


async function asyncCall() {
    console.log("starting async call");
    var result = await resolveafter5Seconds();
    console.log(result);
}

function asyncCallOld() {
    console.log("starting async call");
    resolveafter5Seconds().then(function (result) {
        console.log(result);
    });
}


asyncCall();



