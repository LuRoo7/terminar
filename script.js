function enviar(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let pais = document.getElementById("pais").value
    let apellido = document.getElementById("apellido").value
    let posicion = document.getElementById("Posicion").value

    if (posicion == "1"){
        document.getElementById("mostrarnombre").innerHTML= nombre
        document.getElementById("mostraredad").innerHTML = edad
        document.getElementById("mostrarpais").innerHTML= pais
        document.getElementById("mostrarApellido").innerHTML = apellido
        document.getElementById("mostarposicion").innerHTML = posicion    
    }
    if (posicion == "2"){
        document.getElementById("mostrarnombre2").innerHTML= nombre
        document.getElementById("mostraredad2").innerHTML = edad
        document.getElementById("mostrarpais2").innerHTML= pais
        document.getElementById("mostrarApellido2").innerHTML = apellido
        document.getElementById("mostarposicion2").innerHTML = posicion
    }
    if (posicion == "3"){
        document.getElementById("mostrarnombre3").innerHTML= nombre
        document.getElementById("mostraredad3").innerHTML = edad
        document.getElementById("mostrarpais3").innerHTML= pais
        document.getElementById("mostrarApellido3").innerHTML = apellido
        document.getElementById("mostarposicion3").innerHTML = posicion
}   }
  