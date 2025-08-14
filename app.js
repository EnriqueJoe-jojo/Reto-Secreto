// El array donde se guardarán los nombres
let amigos = [];

//hacemos una funcion para agregar a los amigos
function agregarAmigo() {
        // Captura el valor del campo de entrada
    let nombre = document.getElementById("amigo").value.trim();
        // Valida si el campo está vacío
    if (nombre === '') {
        alert("Por Favor, ingrese un nombre valido");
        return; // Detiene la función si el campo está vacío
    }
        // Agrega el nombre al array
    amigos.push(nombre);
        //Llama a la función para actualizar la lista en la pantalla
    mostrarListaAmigo();
        // Limpia el campo de entrada
    document.getElementById("amigo").value = "";
    console.log(amigos);
}

//funcion para mostrar el mensaje
function mostrarListaAmigo() {
    const lista = document.getElementById("listaAmigos");
        // Vacía la lista para evitar duplicados
    lista.innerHTML = "";
        // Recorre el array y agrega cada nombre como un <li>
    amigos.forEach(amigo => {
        const nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.textContent = amigo;
        lista.appendChild(nuevoElementoLista);
    })
}

//funcion para elegir el nombre aleatoriamente
function sortearAmigo() {
    // Condición: Verifica si el número de elementos en el array 'amigos' es igual a cero.
    // La propiedad '.length' devuelve la cantidad de elementos que hay.
    if (amigos.length === 0) {
        // Si la condición es verdadera (el array está vacío)...
        alert("Por Favor, ingrese los nombres para continuar");
        return;
    }
    //ahora para elegir aleatorio los nombres para el ganador
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let sorteo =amigos[indiceAleatorio];
    //ahora para mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Èl amigo secreto es ${sorteo}`;
        //Elimina el nombre del array para evitar que se repita.
    amigos.splice(indiceAleatorio, 1);
        //vacia el array
        amigos = [];
        //Actualiza la lista visible en pantalla.
    mostrarListaAmigo();
}