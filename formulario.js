// var persona = {
//     nombre: ['Jose', 'Andrei', 'Pinto', 'Avila'],
//     edad: 22,
//     genero: 'masculino',
//     intereses: ['desarrollo', 'futbol'],
//     bio: function () {
//         alert(this.nombre[0] + this.nombre[2] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0]);
//     },
//     saludo: function () {
//         alert("Hola Soy " + this.nombre[0]);
//     }
// };

// // persona.bio();

// function personaa(nombre, apellido) {
//     console.log('Entro a funcion persona');
//     this.nombre = nombre;
//     this.apellido = apellido;
//     return nombre + apellido;
// }
// var nombre = personaa('Jose ', ' Andrei');
// console.log('Este es mi nombre->', nombre);


class persona {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    llamar() {
        console.log('Mi nombre es', this.nombre, ' ', this.appellido);
        return true;
    }
    validarSaldo() {
        return this.saldo > 50000
    }
}

class cliente extends persona {
    constructor(nombre, apellido, saldo) {
        super(nombre, apellido, saldo)
    }
    imprimirSaldo() {
        console.log('El saldo que tiene ', this.nombre, ' en la cuenta es ->', this.saldo);
    }
}