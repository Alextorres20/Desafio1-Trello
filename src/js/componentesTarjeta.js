import { Tarjeta } from "./clases";
import { ListaTarjeta } from "./clases";
import { subTarea } from "./clases";

//Referencia a HTML
const tarjetas = document.querySelectorAll(".tarjetas");
const paneles = document.querySelectorAll(".tarjetasColocadas");

const tituloTarjeta = document.querySelector(".titulo.tarjeta");
const botonAñadirTarea = document.querySelector(".añadirTarea");
const divSubTareas = document.querySelector(".lista.subTareas");
const barreraProgreso = document.querySelector(".barrera");
let reservada = 0;


export const añadirSubTarea = (subTarea) => {
    const subtareaHTML = `<input class="toggle" type="checkbox" ${(subTarea.completado)?'checked':''}>${ subTarea.tarea }`;

    //Creo el elemento html
    const checkbox = document.createElement('p'); //Quiero crear el elemento con todos los nodos pero luego añado sólo el hijo
    checkbox.innerHTML = subtareaHTML;

    divSubTareas.append(checkbox);
    barreraProgreso.classList.add("progreso");
    
    return checkbox;
}
botonAñadirTarea.addEventListener('click', function(){
    const inputTxt = document.createElement("input");
    inputTxt.type = "text";
    inputTxt.className = "subTarea";
    inputTxt.setAttribute("placeholder", "Escribe aqui para añadirlo como SubTarea");
    divSubTareas.appendChild(inputTxt);

    inputTxt.addEventListener('keyup', (event) => {
        if(event.keyCode === 13 && inputTxt.value.length > 0) {
            const nuevoSubTarea = new subTarea(inputTxt.value);
            inputTxt.remove();
            añadirSubTarea(nuevoSubTarea);
        }
    });
});

divSubTareas.addEventListener('click', () => {
    

    //A veces hay que pressionar el checklist dos veces para que salga la barra rellenarse, aunque soy consciente que no ha salido como yo queria.
    const checkboxes = document.querySelectorAll(".toggle");
    checkboxes.forEach(checkbox => {
        const cantCheckBoxes = document.querySelectorAll('input[type="checkbox"]').length;
        const cantCheckBoxesChecked = document.querySelectorAll('input[type="checkbox"]:checked').length;
        checkbox.addEventListener('click', function(){
            const barra = document.querySelector(".barra");
            let cantidad = cantCheckBoxes - cantCheckBoxesChecked;
            cantidad = 100 / cantidad;
            barra.style.width = cantidad + "%";
        })
    })
});
    



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