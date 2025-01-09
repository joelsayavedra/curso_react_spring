let cliente = {
    direccion: {
        calle: "manzanas"
    },
    saluda: function(){
        return "hola";
    }
}

console.log(cliente.saluda())

console.log(JSON.stringify(cliente))

let cliente2 = JSON.parse(JSON.stringify(cliente));
cliente2.saluda = cliente.saluda;


cliente2.direccion.calle = "peras"
console.log(cliente2.saluda())

console.log(cliente.direccion.calle)