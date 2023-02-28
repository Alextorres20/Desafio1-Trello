import { listaTarjetas } from "..";
import { Tarjeta } from "./clases";
import { subTarea } from "./clases";
    
//Referencia a HTML
let tarjetas = document.querySelectorAll(".tarjetas");
const paneles = document.querySelectorAll(".tarjetasColocadas");
const prioridad = document.querySelectorAll(".select_prioridad");
const texto_label = document.querySelectorAll(".escribirLabel");
const color_label = document.querySelectorAll(".seleccionarColor");
const divSubTareas = document.querySelectorAll(".listaSubtareas");

const tituloTarjeta = document.querySelectorAll(".titulo.tarjeta");
const descripcion = document.querySelectorAll(".escribir_descripcion");
const botonAñadirTarea = document.querySelectorAll(".añadirTarea");

const divFoto = document.querySelector('.Foto');
const obtenerImagen = document.querySelectorAll(".Imagen_externa");
const btnguardarTarjeta = document.querySelector(".guardarTarjeta");
const btnmodificarTarjeta = document.querySelector(".modificarTarjeta");
const salirGuardarTarjeta = document.querySelector(".salirGuardarTarjeta");
const salirModificarTarjeta = document.querySelector(".salirModificarTarjeta");

//Eventos
export const mostrarOpcionesTarea = () => {
    const botonesAñadir = document.querySelectorAll("button.añadir");
    botonesAñadir.forEach(function(boton){
        boton.addEventListener("click", (event) => {
            const panel = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("tarjetasColocadas")[0];
            guardarTarjetaFuncion(panel);
        });
    })
    modificarTarjetas();
    
}

export const añadirSubTarea1 = (subTarea) => {
    const subtareaHTML = `<input id="${(subTarea.id)}" class="toggle SubTareaIntroducida_añadir" type="checkbox" value ="${(subTarea.subtarea)}">${ subTarea.subtarea }
    <i class="fa fa-times-circle"></i>`;

    //Creo el elemento html
    const checkbox = document.createElement('li'); //Quiero crear el elemento con todos los nodos pero luego añado sólo el hijo
    checkbox.innerHTML = subtareaHTML;

    divSubTareas[0].children[0].append(checkbox);
    
    
    return checkbox;
}

export const añadirSubTarea2 = (subTarea) => {
    const subtareaHTML = `<input id="${(subTarea.id)}" class="toggle SubTareaIntroducida_modificar" type="checkbox" value ="${(subTarea.subtarea)}">${ subTarea.subtarea }
    <i class="fa fa-times-circle"></i>`;

    //Creo el elemento html
    const checkbox = document.createElement('li'); //Quiero crear el elemento con todos los nodos pero luego añado sólo el hijo
    checkbox.innerHTML = subtareaHTML;

    divSubTareas[1].children[0].append(checkbox);
    
    
    return checkbox;
}
botonAñadirTarea[0].addEventListener('click', function(){
        
        const inputTxt = document.createElement("input");
        inputTxt.type = "text";
        inputTxt.className = "subTareaTexto";
        inputTxt.setAttribute("placeholder", "Escribe aqui para añadirlo como SubTarea");
        if(document.querySelector('.subTarea') == undefined){
            divSubTareas[0].appendChild(inputTxt);
        }
        
        
        inputTxt.addEventListener('keyup', (event) => {
            if(event.keyCode === 13 && inputTxt.value.length > 0) {
                const nuevoSubTarea = new subTarea(inputTxt);
                inputTxt.remove();
                añadirSubTarea1(nuevoSubTarea);
                const checkboxes = document.querySelectorAll('input[type=checkbox].SubTareaIntroducida_añadir');
                const marcasX = document.querySelectorAll(".fa.fa-times-circle");
                llenandoBarra1(checkboxes);
                eliminarSubTarea(marcasX);

                const checkeados = [].filter.call( checkboxes, function( el ) {
                    return el.checked
                });
                
                const barra = document.querySelector(".barra");
                let resultadoProgreso = 100 / (checkboxes.length / checkeados.length);
                barra.style.width = resultadoProgreso + "%";
                
            }
        });
    
        
});


const llenandoBarra1 = (checkboxes) => {
    checkboxes.forEach(checkbox => {    
        checkbox.addEventListener('click', function(){
            const checkeados = [].filter.call( checkboxes, function( el ) {
                return el.checked
            });
            
            const barra = document.querySelector(".barra");
            let resultadoProgreso = 100 / (checkboxes.length / checkeados.length);
            barra.style.width = resultadoProgreso + "%";
        
            
        })
    })
}

const llenandoBarra2 = (checkboxes) => {
    checkboxes.forEach(checkbox => {    
        checkbox.addEventListener('click', function(){
            const checkeados = [].filter.call( checkboxes, function( el ) {
                return el.checked
            });
            
            const barra = document.querySelector(".barra.actualizar");
            let resultadoProgreso = 100 / (checkboxes.length / checkeados.length);
            barra.style.width = resultadoProgreso + "%";
        
            
        })
    })
}

const eliminarSubTarea = (marcasX) => {

    marcasX.forEach(marcaX => {
        marcaX.addEventListener('click', function(){
            marcaX.parentNode.remove();
        });

    })  

    
}




const guardarTarjetaFuncion = (panel) => {
    const identificador_panel = document.querySelector('.identificador_panel_guardar');
    identificador_panel.innerHTML = panel.parentElement.id;
    document.querySelector(".añadirTarjeta").classList.add("activo");
    btnguardarTarjeta.addEventListener('click' , () => {
        if(tituloTarjeta[0].value != ""){
            const panel = document.getElementById(identificador_panel.innerHTML).children[1];
            const checkboxes = document.querySelectorAll('input[type=checkbox].SubTareaIntroducida_añadir');
            
                const nuevaTarjeta = new Tarjeta(tituloTarjeta[0].value, descripcion[0].value, prioridad[0].value, texto_label[0].value, color_label[0].value, obtenerImagen[0].value);
                if(identificador_panel.innerHTML == "panel1"){
                    construirHTML(nuevaTarjeta, "panel1");
                    if(checkboxes.length != 0){
                        checkboxes.forEach(checkbox => {
                            const subtarea = new subTarea(checkbox);
                            nuevaTarjeta.nuevaSubTarea(subtarea);
                            construirSubTareaHTML(subtarea, "panel1");
                        })
                    }
                    listaTarjetas.guardarPanel1(nuevaTarjeta);
                }
                if(identificador_panel.innerHTML == "panel2"){
                    construirHTML(nuevaTarjeta, "panel2");
                    if(checkboxes.length != 0){
                        checkboxes.forEach(checkbox => {
                            const subtarea = new subTarea(checkbox);
                            nuevaTarjeta.nuevaSubTarea(subtarea);
                            construirSubTareaHTML(subtarea, "panel2");
                        })
                    }
                    listaTarjetas.guardarPanel2(nuevaTarjeta);
                }
                if(identificador_panel.innerHTML == "panel3"){
                    
                    construirHTML(nuevaTarjeta, "panel3");
                
                    if(checkboxes.length != 0){
                        checkboxes.forEach(checkbox => {
                            const subtarea = new subTarea(checkbox);
                            
                            nuevaTarjeta.nuevaSubTarea(subtarea);
                            construirSubTareaHTML(subtarea, "panel3");
                        })
                    }
                    listaTarjetas.guardarPanel3(nuevaTarjeta);
                }
            
            
            tituloTarjeta[0].style.border = "none";

            tituloTarjeta[0].value = "";
            descripcion[0].value = "";
            prioridad[0].value = "Baja"; 
            texto_label[0].value = "";
            color_label[0].value = ""; 
            obtenerImagen[0].value = "";
            if(checkboxes.length > 0){
                checkboxes.forEach(checkbox => {
                    checkbox.parentNode.remove();
                });
            }
            const barra = document.querySelector(".barra");
            barra.style.width = "0%";
            document.querySelector(".añadirTarjeta").classList.remove("activo");
            tarjetas = document.querySelectorAll(".tarjetas");

            moverTarjetas();
            modificarTarjetas();
        }
    });


    salirGuardarTarjeta.addEventListener('click', () => {
        document.querySelector(".añadirTarjeta").classList.remove("activo");
    })
}


export const construirHTML = (nuevaTarjeta, panel) => {
    const panel_identificador = document.getElementById(panel).children[1];
    const html = `
    <div class="contenido">
        <div class="imagen">
            <img src="${(nuevaTarjeta.imagen)}">
        </div>
        <div class="titulo_tarea">
            <p class="titulo">${(nuevaTarjeta.tarjeta)}</p>
            <p class="descripcion">${(nuevaTarjeta.descripcion)}</p>
        </div>
        <div class="label_prioridad">
            <span class="prioridad ${(nuevaTarjeta.prioridad)}">${(nuevaTarjeta.prioridad)}</span>
            <span class="label" style="background-color: ${(nuevaTarjeta.color)}; color: white;">${(nuevaTarjeta.label)}</span>
        </div>
        <div class="subTareasLista">
            <ul class="listado_subTarea">
            </ul>
        </div>
    </div>`


    const div_row = document.createElement('div');
    div_row.className = "twelve columns tarjetas"
    div_row.setAttribute("data-id", nuevaTarjeta.id);
    div_row.setAttribute("draggable", true);

    div_row.innerHTML = html;

    panel_identificador.append(div_row);

}



export const construirSubTareaHTML = (subTarea, panel) => {
    const ul_subTareasLista = document.getElementById(panel).children[1].lastChild.lastChild.children[3].children[0];
    const html = `<input type="checkbox" 
    ${(subTarea.completado)?'checked':''}>${(subTarea.subtarea)}</li>`
     
    const li = document.createElement('li');
    li.id = subTarea.id;

    li.innerHTML = html;
    ul_subTareasLista.append(li);

}

const modificarTarjetas = () => {
    tarjetas = document.querySelectorAll(".tarjetas");
    tarjetas.forEach( tarjeta => {
        tarjeta.addEventListener("click", () => {
            modificarTarjeta(tarjeta);
        });
    });
}

const modificarTarjeta = (tarjeta) => {
        document.querySelector(".actualizarTarjeta").classList.add("activo");
        let modificado = false;
        const identificador_panel = document.querySelector('.identificador_panel_modificar');
        const identificador_tarjeta = tarjeta.getAttribute("data-id");
        identificador_panel.innerHTML = identificador_tarjeta;
        const panel = tarjeta.parentElement.parentElement.id
        const div_row_data = document.querySelector(`[data-id="${(identificador_tarjeta)}"]`)

        let titulo = tarjeta.children[0].children[1].children[0];
        let descripcion_modificar = tarjeta.children[0].children[1].children[1];
        let imagen = tarjeta.children[0].children[0].children[0];
        let color = tarjeta.children[0].children[2].children[1];
        let label = tarjeta.children[0].children[2].children[1];
        let prioridad_modificar = tarjeta.children[0].children[2].children[0];
        const subTareas_modificar = tarjeta.children[0].children[3].children[0].children;


        
        if(imagen.src != ""){
            obtenerImagen[1].value = imagen.src;
        }

        if(titulo.innerHTML != "" || descripcion_modificar.innerHTML != ""){
            tituloTarjeta[1].value = titulo.innerHTML;
            descripcion[1].value = descripcion_modificar.innerHTML;
        }


        if(label.innerHTML != ""){
            texto_label[1].value = label.innerHTML;
            color_label[1].value = color.style.backgroundColor;
        }

        if(prioridad_modificar.innerHTML != ""){
            prioridad[1].value = prioridad_modificar.innerHTML;
        }

        if(subTareas_modificar.length > 0){
            for ( const elemento of subTareas_modificar) {
                
                const subtareaHTML = `<input id="${(elemento.id)}" class="toggle SubTareaIntroducida_modificar" type="checkbox" value ="${(elemento.innerText)}" ${(elemento.children[0].checked)?'checked':''}>${ elemento.innerText }
                <i class="fa fa-times-circle"></i>`;
                //Creo el elemento html

                const checkbox = document.createElement('li'); //Quiero crear el elemento con todos los nodos pero luego añado sólo el hijo
                checkbox.innerHTML = subtareaHTML;
                divSubTareas[1].children[0].append(checkbox);
                
            }

            const checkboxes = document.querySelectorAll('input[type=checkbox].SubTareaIntroducida_modificar');
            
            llenandoBarra2(checkboxes);
            const checkeados = [].filter.call( checkboxes, function( el ) {
                return el.checked
            });
            

            const barra = document.querySelector(".barra.actualizar");
            let resultadoProgreso = 100 / (checkboxes.length / checkeados.length);
            barra.style.width = resultadoProgreso + "%";

            const marcasX = document.querySelectorAll(".fa.fa-times-circle");
            eliminarSubTarea(marcasX);
        }

        botonAñadirTarea[1].addEventListener('click', function(){


            //Arreglar el input cuando añado una nueva subtarea en Modificar tarjeta
            
                const inputTxt = document.createElement("input");
                inputTxt.type = "text";
                inputTxt.className = "subTareaTexto";
                inputTxt.setAttribute("placeholder", "Escribe aqui para añadirlo como SubTarea");
                if(document.querySelector('.subTarea') == undefined){
                    divSubTareas[1].appendChild(inputTxt);
                }
                if(document.querySelectorAll('.subTareaTexto').length > 1){
                    document.querySelectorAll('.subTareaTexto')[document.querySelectorAll('.subTareaTexto').length - 1].remove();
                }
                
                inputTxt.addEventListener('keyup', (event) => {
                    if(event.keyCode === 13 && inputTxt.value.length > 0) {
                            const nuevoSubTarea = new subTarea(inputTxt);
                            inputTxt.remove();
                            añadirSubTarea2(nuevoSubTarea);
                            const checkboxes = document.querySelectorAll('input[type=checkbox].SubTareaIntroducida_modificar');
                            const marcasX = document.querySelectorAll(".fa.fa-times-circle");
                            llenandoBarra2(checkboxes);
                            eliminarSubTarea(marcasX);
                
                            const checkeados = [].filter.call( checkboxes, function( el ) {
                                return el.checked
                            });
                            
                            const barra = document.querySelector(".barra.actualizar");
                            let resultadoProgreso = 100 / (checkboxes.length / checkeados.length);
                            barra.style.width = resultadoProgreso + "%";   
                    }
                
                });
                
        });

        btnmodificarTarjeta.addEventListener('click', function(){
            const checkboxes = document.querySelectorAll('input[type=checkbox].SubTareaIntroducida_modificar');
            if(!modificado){
                const tarjetaModificada = new Tarjeta(tituloTarjeta[1].value, descripcion[1].value, prioridad[1].value, texto_label[1].value, color_label[1].value, obtenerImagen[1].value);
                titulo.innerHTML = tituloTarjeta[1].value;
                descripcion_modificar.innerHTML = descripcion[1].value;
                imagen.src = obtenerImagen[1].value;
                color.style.backgroundColor = color_label[1].value;
                label.innerHTML = texto_label[1].value;
                prioridad_modificar.classList.remove('Baja','Media',"Alta");
                prioridad_modificar.innerHTML = prioridad[1].value;
                prioridad_modificar.classList.add(prioridad[1].value);
                
                // console.log(divSubTareas[1].children[0].children);
                // console.log(tarjeta.children[0].children[3].children[0].children);
                console.log(subTareas_modificar); 
                for(const subtarea_borrar of subTareas_modificar){
                    console.log(subtarea_borrar);
                    subtarea_borrar.remove();
                }

                for(const subtarea_modificada of divSubTareas[1].children[0].children){
                    // console.log(subtarea_modificada.children[0]);    
                    const nuevaSubTarea = new subTarea(subtarea_modificada.children[0]);
                    construirSubTareaHTML(nuevaSubTarea, tarjeta.parentElement.parentElement.id)
                    tarjetaModificada.nuevaSubTarea(nuevaSubTarea);
                }
                if(panel == "panel1"){
                    listaTarjetas.modificarPanel1(tarjetaModificada, identificador_tarjeta);
                }
                if(panel == "panel2"){
                    listaTarjetas.modificarPanel2(tarjetaModificada, identificador_tarjeta);
                }
                if(panel == "panel3"){
                    listaTarjetas.modificarPanel3(tarjetaModificada, identificador_tarjeta);
                }
                modificado = true;

                tituloTarjeta[1].value = "";
                descripcion[1].value = "";
                prioridad[1].value = "Baja"; 
                texto_label[1].value = "";
                color_label[1].value = ""; 
                obtenerImagen[1].value = "";
                if(checkboxes.length > 0){
                    checkboxes.forEach(checkbox => {
                        checkbox.parentNode.remove();
                    });
                }

                const barra = document.querySelector(".barra.actualizar");
                barra.style.width = "0%";

                
            }
            document.querySelector(".actualizarTarjeta").classList.remove("activo");
        });

        salirModificarTarjeta.addEventListener('click', function(){
            
            for(const subTarea_modificada of divSubTareas[1].children[0].children){
                subTarea_modificada.remove();
            }
            if(!modificado){
                modificado = true;
            }
            document.querySelector(".actualizarTarjeta").classList.remove("activo");
        });
        

        
    
    
}

    
export const moverTarjetas = () => {
    tarjetas = document.querySelectorAll(".tarjetas");
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
        const dato = ev.dataTransfer.setData('text/plain', ev.target.getAttribute('data-id'));
        
    }   
    
    function dragOver(ev){
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    function drop(ev){
    
        ev.preventDefault();
        ev.stopPropagation();
        const agarrado = ev.dataTransfer.getData('text/plain');
        const objetivo = ev.target;
        console.log(agarrado);
        if(objetivo.classList.contains('tarjetasColocadas')){
            console.log(objetivo);
            ev.target.append(document.querySelector(`[data-id="${(agarrado)}"]`));
            if(objetivo.parentElement.parentElement.id == "panel1"){
                console.log(objetivo.parentElement.parentElement.id);
            }
            if(objetivo.parentElement.parentElement.id == "panel2"){
                console.log(objetivo.parentElement.parentElement.id);
            }
            if(objetivo.parentElement.parentElement.id == "panel3"){
                console.log(objetivo.parentElement.parentElement.id);
            }
        }
        else if(objetivo.classList.contains('tarjetas')){
            console.log(objetivo);
            ev.target.parentNode.append(document.querySelector(`[data-id="${(agarrado)}"]`));
        }
    }
}

