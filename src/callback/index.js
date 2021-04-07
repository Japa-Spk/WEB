function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(8, 2, sum));


const url = "https://swapi.dev/api/planets/20/";

function get(URL, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        const DONE = 4;
        const OK = 200;
        if (this.readyState === DONE) {
            if (this.status === OK) {
                callback(null, JSON.parse(this.responseText));
            } else {
                callback(new Error('se produjo un error al realizar el request:', this.status));
            }
        }
        xhr.open('GET', URL);
        xhr.send(null);
    };
}

get(url, function onResponse(err, luke) {
    if (err) return console.log('Request failder', err);
    console.log('Request Succeded');
    console.log('luke', luke);
});
