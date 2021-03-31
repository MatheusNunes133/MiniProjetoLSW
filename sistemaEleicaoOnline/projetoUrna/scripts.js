let etapas = [
    {
        titulo: 'VEREADOR', 
        numeros: 5, // vai servir para termos o numero de quadradinho (divs) para colocar os números do vereador
        candidatos: [
            {
                numero: '38111',
                nome: 'Fulano de Tal',
                partido: 'ABC',
                fotos:[
                    {url:'38111.jpg', legenda: 'Vereador'}
                ]
            },
            {
                numero: '77222',
                nome: 'Beltrano da Silva',
                partido: 'DEFG',
                fotos:[
                    {url:'77222.jpg', legenda: 'Vereador'}
                ]
            },
        ]
    },
    {
        titulo: 'PREFEITO',
        numeros: 2, // vai servir para termos o numero de quadradinho (divs) para colocar os números do prefeito
        candidatos: [
            {
                numero: '99',
                nome: 'Ciclano',
                partido: 'ABC',
                vice: 'Cic',
                fotos:[
                    {url:'99.jpg', legenda: 'Prefeito'},
                    {url:'99_2.jpg', legenda: 'Vice-Prefeito', small: true}
                ]
            },
            {
                numero: '84',
                nome: 'Zulano',
                partido: 'QWERTY',
                vice: 'Zul',
                fotos:[
                    {url:'84.jpg', legenda: 'Prefeito'},
                    {url:'84_2.jpg', legenda: 'Vice-Prefeito', small: true}
                ]
            },
        ]
    }
];
let quadradoNumero = document.getElementsByClassName('numero');
function inicia(){
    for(let i=2;i<5;i++){
        let divs = document.querySelector('.d-1-3');
        let div = document.createElement("div");
        divs.appendChild(div).classList.add('numero');
        
    }
    for(let i=0;i<quadradoNumero.length;i++){
    let element = quadradoNumero[i];
    element.addEventListener('mousedown',clicar);
    element.addEventListener('mouseup',sair);
    element.addEventListener('onkeypress',clicar);
}
}
  
window.addEventListener("load",inicia);


console.log(quadradoNumero.length);


function clicar(event){
    event.target.style.backgroundColor = 'red';
    event.textContent = event.keycode;
}
function sair(event){
    event.target.style.backgroundColor = '#E8E8E8';
}
function tecla(event){
    event.textContent = event.keycode;
}