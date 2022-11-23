//Botón play en una constante y la hacemos llegar al HTML con docuemn
const playButton = document.querySelector('#playButton');

//le decimos a la constante que cuando se haga click en JUGAR ejecute la funcion startPlay
playButton.addEventListener('click', startPlay);

//Array participantes con nombre y sin estado ON/OFF
let listCoders = ['Natalia', 'Paula', 'Veronika','Lola', 'Adri','Raquel', 'Ana', 'Carmela', 'Elena', 'Noa', 'VeFlo', 'Alba', 'Esther', 'Lol', 'Paloma', 'Alesia', 'Bea', 'Camila', 'Carmen', 'Sierri', 'Flor', 'Palo', 'Sandra', 'Himo', 'Leidy'];
//Array participantes eliminadas
let listCodersOff = [];
let selectedCoders = [];

for ( let index = 0; index < listCoders.length; index++ ){
    coders.innerHTML += `
        <div class="col">${listCoders[index]}</div>
    `}

// función que ejecuta el botón JUGAR: creamos variable con List Coders vivas ON que sea aleatoria con Math random
function startPlay(){
    let randomCoder = Math.floor(Math.random() * listCoders.length);
    
    let selectedCoders = listCoders.splice(randomCoder, 
    1); // sacar de la lista de vivos -> guardado en una variable
    
    coders.innerHTML = ``;
    for ( let index = 0; index < listCoders.length; index++ ){
        coders.innerHTML += `
                <div class="col">${listCoders[index]}</div>
            `}

    if (listCoders.length === 0) {
            swal("¡Juega de nuevo!", {
                buttons: false,
                timer: 1500,
            }); 
    }

    if (listCoders.length > 0) {
            swal(`La Coder eliminada es ${selectedCoders}`, {
                buttons: false,
                timer: 1500,
            });            
    }       
    //Lista de eliminadas
    listCodersOff.unshift(selectedCoders);

    codersOff.innerHTML = ``;
    for ( let index = 0; index < listCodersOff.length; index++ ){
            codersOff.innerHTML += `
                    <p class="erased">${listCodersOff[index]}</p>
    `}
    document.getElementById("codersOff").innerHTML= codersOff.innerHTML

};