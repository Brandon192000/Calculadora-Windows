const valorIngresado = document.getElementById('Mostrar');
const botones = document.querySelectorAll('.btn');

// Funcion para agregar valores al input
function agregarValor(valor) {
    valorIngresado.value += valor;
}


for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        const valor = botones[i].value;

        if (valor === "=" || valor === "C" || valor === "CE" || valor === "+/-" || valor === "⌫" || valor === "√" || valor === "x²") {
            operaciones(valor);
        } else {
            agregarValor(valor);
        }
    });
}

function operaciones(valor) {
    switch (valor) {

        case "C":
        case "CE":

            // Limpiar el campo de entrada
            valorIngresado.value = "";
            break;

        case "=":

            try {
                valorIngresado.value = eval(valorIngresado.value); /* eval evalua una cadena de texto como una expresion matematica y retorna el resultado */
            } catch (error) {
                alert("Dato ingresado no valido");
                valorIngresado.value = "";
            }

            break;

        case "+/-":

            if (valorIngresado.value.startsWith("-")) {
                valorIngresado.value = valorIngresado.value.slice(1); /* con el metodo slide se elimina la primer cadena y este metodo lo que hace es que extrae una parte de la cadena principal y es un metodo de cadenas de texto */
            } else {
                valorIngresado.value = "-" + valorIngresado.value; /* aqui lo que hice fue nada mas concatenarle un - al numero ingresado por el usuario */
            }

            break;

        case "⌫":

            valorIngresado.value = valorIngresado.value.slice(0, -1); /* elimina la primer cadena con el slide */
            break;

        case "√":

            try {
                const numero = parseFloat(valorIngresado.value || 0); /* convierto el numero porque si no lo pongo me da un error que dice que es nan ya que si por ejemplo se pone 5, esto pasa porque no es una cadena */
                if (numero < 0) {
                    alert("No se puede calcular la raiz cuadrada de un numero negativo");
                    return;
                }
                valorIngresado.value = Math.sqrt(numero); /* math.sqrt da la raiz de el numero digitado por el usuario */
            } catch (error) {
                alert("Numero invalido para la raiz cuadrada");
                valorIngresado.value = ""; 
            }

            break;

        case "x²":
        
            try {
                const numero = parseFloat(valorIngresado.value || 0);
                valorIngresado.value = Math.pow(numero, 2);
            } catch (error) {
                alert("Numero invalido para elevar al cuadrado");
                valorIngresado.value = ""; // 
            }

            break;

        default:

            break;
    }
}



