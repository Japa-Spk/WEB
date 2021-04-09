let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
function get(URL, callback){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange  =function(){
            const DONE =4
            const OK = 200
            if (this.readyState === DONE){
                if(this.status === OK){
                    callback(null, JSON.parse(this.responseText))
                }else{
                    callback(new ERROR (`Se produjo un error al realizar el request: ${this.status}`))
                }
            }
        }
        xhr.open('GET', URL);
        xhr.send(null);
    }
    get('https://swapi.dev/api/people/2/', function onResponse (err, luke){
        if(err) return console.log (`Request failed: ${err}`)   
        console.log(`Request succeded`) 
        console.log(`Request succeded`, luke)    
    })