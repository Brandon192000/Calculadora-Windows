//este es el input donde se ingresan los valores..
const valorIngresado = document.getElementById('Mostrar');
 
//funcion para que cuando le ingresen un valor al input lo actualice.
function agregarValor(valor){
 valorIngresado.value += valor;
}
 
//declarando los valores.
const botones = document.querySelectorAll('.btn');
 
//este for para ir ingresando el valor de cada valor.
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        agregarValor(botones[i].value);
    });
}

function operaciones(){

    eval(document.getElementById(valorIngresado.value))
    console.log(eval)
}

operaciones();


