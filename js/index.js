//Botón play en una constante y la hacemos llegar al HTML con docuemn
const playButton = document.querySelector('#playButton');

//le decimos a la constante que cuando se haga click en JUGAR ejecute la funcion startPlay
playButton.addEventListener('click', startPlay());

//Array participantes con nombre y sin estado ON/OFF
let listCoders = ['Natalia', 'Paula', 'Veronika','Lola G', 'Adriana','Raquel'];

// función que ejecuta el botón JUGAR: creamos variable con List COders vivas ON que sea aleatoria con Math random
function startPlay(){
    let listCodersOn = Math.floor(Math.random()*1);



console.log(listCodersOn);


    //console.log("le has dado");
   
};

// variable con listado de coders eliminadas
let listCodersOff =[]; 

//mostrar en consola la variable con array de todas las coders
console.log(listCoders.length)





//Pop up message de eliminación

//Listado inverso con splice

//Añadir participante