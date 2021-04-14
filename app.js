var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/cursos", cursos);

app.use(express.static("public"));
app.use("/src/callback", express.static("./src/callback/"));

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/covid.html");
}

function cursos (peticion, resultado)
{
  resultado.send("Estos son los <strong>cursos</strong>");
}

app.listen(8989);

console.log("Servidor express escuchando");