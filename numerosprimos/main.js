//Traer los elementos del DOM
entrada = document.getElementById("numero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0 
//capturar los numeros desde el navegador
entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value
})

function numerosprimos(n){
    let esprimo = false
    if(n==1){
        esprimo =false
    }else{
        let cuenta = 0
        for (let i =2; i<=n; i++){
            if(n%i==0){
                cuenta = cuenta + 1
            }
        }
    if(cuenta==1){
        esprimo= true
    }else{
        esprimo=false
    }

    }
    return esprimo
}

btn.addEventListener("click",()=>{
    resultado = numerosprimos(numero)
    console.log(resultado)
    let hijo = document.createElement("h3")
    if (resultado){
        let hijo = document.createElement("h3")
        hijo.innerHTML = `El ${numero} es primo`
    }else{
        hijo.innerHTML = `El ${numero} no es primo`
    }
    salida.appendChild(hijo)
})

