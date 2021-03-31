let tipoVereador = document.querySelector('div.d-1-2 span');

let quadradoNumero = document.getElementsByClassName('numero');

if(tipoVereador.innerHTML == 'VEREADOR'){
function inicia(){
    for(let i=2;i<5;i++){
        let divs = document.querySelector('.d-1-3');
        let div = document.createElement("div");
        divs.appendChild(div).classList.add('numero');
    }
}
    
window.addEventListener("load",inicia);

}
