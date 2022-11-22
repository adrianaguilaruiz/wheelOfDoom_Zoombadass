//Botón play en una constante y la hacemos llegar al HTML con docuemn
const playButton = document.querySelector('#playButton');

//le decimos a la constante que cuando se haga click en JUGAR ejecute la funcion startPlay
playButton.addEventListener('click', startPlay);

//Array participantes con nombre y sin estado ON/OFF
let listCoders = ['Natalia', 'Paula', 'Veronika','Lola G', 'Adriana','Raquel'];

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
        console.log(selectedCoders);
        console.log(listCoders);
    
        //Lista de eliminadas
        listCodersOff.unshift(selectedCoders);
        console.log(listCodersOff);

        codersOff.innerHTML = ``;
        for ( let index = 0; index < listCodersOff.length; index++ ){
            codersOff.innerHTML += `
                    <p>${listCodersOff[index]}</p>
                `}
};