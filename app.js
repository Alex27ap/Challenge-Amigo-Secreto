// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. VARIABLE GLOBAL
// Inicia declarando un array que almacenará los nombres de los amigos
let amigos = [];

// 2. INPLEMENTANDO UNA FUNCIÓN PARA AGREGAR AMIGOS
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let input = document.querySelector('#amigo');
  let nombre = input.value.trim();

  // Validar la entrada
  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Mostrar lista actualizada
  mostrarLista();
  input.focus();
}


// 3. IMENTAR UNA FUNCIÓN PARA ACTUALIZAR LA LISTA DE AMIGOS
function mostrarLista() {
  // Obtener el elemento <ul> de la lista
  let lista = document.querySelector('#listaAmigos');

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el array amigos
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo <li>
    let li = document.createElement('li');
    li.textContent = amigos[i];

    // Agregar el <li> a la lista
    lista.appendChild(li);
  }
}


// 4. IMPLEMENTAR UNA FUNCIÓN PARA SORTEAR LOS AMIGO
function sortearAmigo() {
  // Validar que haya al menos 2 amigos
  if (amigos.length < 2) {
    alert("Agrega al menos 2 amigos para sortear.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let elegido = amigos[indiceAleatorio];

  // Ocultar la lista
  document.querySelector('#listaAmigos').innerHTML = "";

  // Mostrar el resultado
  document.querySelector('#resultado').innerHTML = ` 🙂‍↔️🥳 El amigo secreto es: ${elegido}`;
}
