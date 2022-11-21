//Botón play en una constante y la hacemos llegar al HTML con docuemn
const playButton = document.querySelector('#playButton');

//le decimos a la constante que cuando se haga click en JUGAR ejecute la funcion startPlay
playButton.addEventListener('click', startPlay);

//Array participantes con nombre y sin estado ON/OFF
let listCoders = ['Natalia', 'Paula', 'Veronika','Lola G', 'Adriana','Raquel'];

//Array participantes eliminadas
let listCodersOff = [];

// función que ejecuta el botón JUGAR: creamos variable con List Coders vivas ON que sea aleatoria con Math random
function startPlay(){
    let randomCoder = Math.floor(Math.random() * listCoders.length);
    
    let selectedCoders = listCoders.splice(randomCoder, 1); // sacar de la lista de vivos -> guardado en una variable
    if (listCoders.length === 0) {
        swal("¡Juega de nuevo!", {
        buttons: false,
        timer: 1500,
    });
    }

    console.log(selectedCoders);
    console.log(listCoders);
    swal(`La Coder eliminada es ${selectedCoders}`, {
        buttons: false,
        timer: 1500,
    });
    //Lista de eliminadas
    let deletedCoders = listCodersOff.unshift(selectedCoders);
    deletedCoders = listCodersOff.toString();
    console.log(deletedCoders);
    //console.log(listCodersOff);
    //si la lista esta vacia para el juego
    //let newArray = listCodersOff.toString();
    //console.log(newArray);
};

/* movieSection.innerHTML += `
<div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="Imagen de la película">
    <div class="card-body">
        <h3 class="card-title">${id}. ${title}</h3>
        <h4 class="card-title">Director: ${director}</h4>
        <h5 class="card-title">Género: ${genre}</h5>
    </div>
</div>
` */

coders.innerHTML += `
    <div id="coders" class="participants">
        <div class="row">
            <div class="col">${listCoders[0]}</div>
            <div class="col">${listCoders[1]}</div>
            <div class="col">${listCoders[2]}</div>
            <div class="col">${listCoders[3]}</div>
            <div class="col">${listCoders[4]}</div>
            <div class="col">${listCoders[5]}</div>
        </div>
    </div>
`
codersOff.innerHTML += `
    <div id="codersOff" class="container">
        <img src="./images/monitor.png" alt="ordenador" width=80%">
        <div class="listCoders">
            <p>${listCodersOff}</p><br>
        </div>
    </div>
`

// variable con listado de coders eliminadas


//mostrar en consola la variable con array de todas las coders





//Pop up message de eliminación

//Listado inverso con splice

//Añadir participante