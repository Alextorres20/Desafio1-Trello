import { Tarjeta } from "./clases";
import { ListaTarjeta } from "./clases";


//Referencia a HTML
const tarjetas = document.querySelectorAll(".tarjetas");
const paneles = document.querySelectorAll(".tarjetasColocadas");





tarjetas.forEach(tarjeta => {
    
    tarjeta.addEventListener('dragstart', dragStart);
});

paneles.forEach(panel => {
    // panel.setAttribute('ondrop','drop(event)');
    // panel.setAttribute('ondragover','allowDrop(event)');

    panel.addEventListener('dragover', dragOver);

    panel.addEventListener('drop', drop);
});

function dragStart(ev){
    console.log("Empezar agarre");
    const dato = ev.dataTransfer.setData('text', ev.target.id);
    console.log(dato);
}

function dragOver(ev){
    ev.preventDefault();
}

function drop(ev){

    ev.preventDefault();
    const agarrado = ev.dataTransfer.getData('text');
    const objetivo = ev.target.classList;

    console.log(agarrado);
    console.log(objetivo);

    if(objetivo.contains('tarjetasColocadas')){
        ev.target.append(document.getElementById(agarrado));
    }
    else if(objetivo.contains('tarjetas')){
        ev.target.parentNode.append(document.getElementById(agarrado));
    }
}