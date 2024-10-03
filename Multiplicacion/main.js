//Traer los elementos del DOM
entrada = document.getElementById("numero")
otraentrada = document.getElementById("otroNumero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0 
let otronumero = 0
//capturar los numeros desde el navegador
entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value
})

otraentrada.addEventListener("input",(evento)=>{
    otroNumero= evento.target.value
})
function multiplicacion(parametro, otroParametro){
    return parametro*otroParametro
}
//para usar la funcion multiplicacion cuando le doy click al boton
btn.addEventListener("click",()=>{
    resultado = multiplicacion(numero,otroNumero)
    let hijo = document.createElement("h3")
        hijo.innerHTML = `El resultado de ${numero}x${otroNumero} es ${resultado}`
        salida.appendChild(hijo)
})
let resultado=multiplicacion(5,10)

console.log(resultado)