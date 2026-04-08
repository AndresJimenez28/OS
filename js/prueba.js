const contarHastaNumero =()=>{
    let numeroInput = document.getElementById("numeroContar");
    let resultado = document.getElementById("resultadoContar");
    let numero = parseInt(numeroInput.value);
    if (isNaN(numero) || numero < 1) {
        resultado.textContent="por favor ingrese un numero válido mayor a 1";
       
        return;
    }
    let mensaje ="";
    for (let i = 1; i <= numero; i++){ 
        //mensaje += i + " ";
        mensaje=mensaje + i + " ";
  
    resultado.textContent=mensaje;
    }

}

const sumarNumeros =()=>{
    const numeroInput1 = document.getElementById("numeroSumar1");
    const numeroInput2 = document.getElementById("numeroSumar2");
    const resultadoSuma = document.getElementById("resultadoSumar");
    const numero1 = parseInt(numeroInput1.value);
    const numero2 = parseInt(numeroInput2.value);
    if (isNaN(numero1) && isNaN(numero2)) {
        resultadoSuma.textContent="por favor ingrese dos números válidos.";
        
        return;
    }
    
    const suma = numero1 + numero2;
    resultadoSuma.textContent="la suma es: " + suma;

}



const verificarParImpar = () => {

    const numeroInput3= document.getElementById("numeroPar");
    const resultado = document.getElementById("resultadoPar");

    const numero = parseInt(numeroInput3.value);

    if (isNaN(numero)) {
        resultado.textContent = "Por favor ingrese un número válido.";
        return;
    }

    if (numero % 2 == 0) {
        resultado.textContent = "El número es PAR";
    } else {
        resultado.textContent = "El número es IMPAR";
    }

}




document.getElementById("btnContar").addEventListener("click", contarHastaNumero);
document.getElementById("btnSumar").addEventListener("click", sumarNumeros);
document.getElementById("btnPar").addEventListener("click", verificarParImpar);
