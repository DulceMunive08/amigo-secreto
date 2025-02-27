let Amigos = [];
function agregarAmigo(){
  
    let nombre = document.getElementById ("amigo").value 
    if (nombre == "")  { 
        alert ("por favor, ingresa tu nombre");
        
    } else { 
        Amigos.push (nombre) 
        document.querySelector ('input').value = "";
        mostrarAmigo();
                }
     
}
function mostrarAmigo (){
    let lista = document.getElementById ("listaAmigos")
    lista.innerHTML = ""
    for (let index = 0; index < Amigos.length; index++) {
        let li = document.createElement ('li')
        li.textContent = Amigos [index]
        lista.appendChild (li)

        
    }
}
function sortearAmigo(){
    if (Amigos == "") {
        alert ( "Ingresar amigos");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * Amigos.length);
    let amigoSeleccionado = Amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>🎉 Amigo secreto: ${amigoSeleccionado}</li>`;
}

