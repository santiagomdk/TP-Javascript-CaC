function descuento (cant, cat){
    let estudiante = 0.2
    let trainee = 0.5
    let junior = 0.85
    let precio = 200
    let resultado = 0

    if (cat == "estudiante"){
        resultado = cant * precio * estudiante
    }else if (cat == "trainee"){
        resultado = cant * precio * trainee
    }else{
        resultado = cant * precio * junior
    }
    return resultado

}

let formulario = document.getElementById("formulario-compra")
let categorias = document.getElementById("categoria")
let cantidades = document.getElementById("cantidad")
let precioFinal = document.getElementById("total")

formulario.addEventListener("reset", ()=>{
    precioFinal.textContent = "Total a pagar: $"
})

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    precioFinal.textContent = "Total a pagar: $" + descuento(cantidades.value, categorias.value)
})