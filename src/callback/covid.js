// let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function get(URL, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        const DONE = 4
        const OK = 200
        if (this.readyState === DONE) {
            if (this.status === OK) {
                callback(null, JSON.parse(this.responseText))
            } else {
                callback(new ERROR(`Se produjo un error al realizar el request: ${this.status}`))
            }
        }
    }
    xhr.open('GET', URL);
    xhr.send(null);
}
var fechas = [];
var contagiados = [];
get('https://www.datos.gov.co/resource/gt2j-8ykr.json', function onResponse(err, luke) {
    if (err) return console.log(`Request failed: ${err}`)
    console.log(`Request succeded`, luke)

    for (var i of luke) {
        // console.log(i.fecha_reporte_web)
        this.fechas.push(i.fecha_reporte_web);
    }
    for (var i = fechas.length - 1; i >= 0; i--) {
        if (fechas.indexOf(fechas[i]) !== i) fechas.splice(i, 1);
    }
    this.console.log(fechas);
    for (var i of this.fechas) {
        console.log(i);
        var c = 0;
        for (var j of luke) {
            if (i == j.fecha_reporte_web) {
               console.log(i, j.fecha_reporte_web);
                c++;
            };
        }
        contagiados.push(c);
    }
    console.log('contagiados', this.contagiados);
})
