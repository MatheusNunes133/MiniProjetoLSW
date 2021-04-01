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
    //Adicionando os três input que estavam faltando para os 5 do vereador
    for(let i=2;i<5;i++){
        let inputs = document.querySelector('.d-1-3');
        let input = document.createElement("input");
            inputs.appendChild(input).classList.add('numero')
    }
    //Adicionando o input ao primeiro quadrado que pisca
    let divInput1 = document.querySelectorAll('.numero')[0];
    let input = document.createElement("input");
        divInput1.appendChild(input).classList.add('numero');
    
        divInput1.addEventListener('mousedown',clicar);
        divInput1.addEventListener('mouseup',sair);
        document.addEventListener('keydown',function(event){
            let teclas = event.keyCode;
            console.log(teclas)
        })
        //Limitando o input a 1 caractere
    let primeiroQuadrado = document.querySelectorAll('input.numero')[0];
        primeiroQuadrado.setAttribute('maxlength',1);
        primeiroQuadrado.setAttribute('type','number');

    //Adicionando o input ao segundo quadrado
    let divInput2 = document.querySelectorAll('.numero')[2];
    let input2 = document.createElement("input");
        divInput2.appendChild(input2).classList.add('numero');
        divInput1.addEventListener('mousedown',clicar);
        divInput1.addEventListener('mouseup',sair);
     //Limitando o input a 1 caractere
    let segundoQuadrado = document.querySelectorAll('input.numero')[1];
        segundoQuadrado.setAttribute('maxlength',1);
        segundoQuadrado.setAttribute('type','number');

    //adicionando os eventos aos tres inputs que faltavam para o vereador
    for(let i=4;i<quadradoNumero.length;i++){
        let element = quadradoNumero[i];
            element.addEventListener('mousedown',clicar);
            element.addEventListener('mouseup',sair);
    //Limitando o input a 1 caractere
            element.setAttribute('maxlength',1);
            element.setAttribute('type','number');
   
    }
}

window.addEventListener("load",inicia);

function clicar(event){
    event.target.style.backgroundColor = 'red';
    event.textContent = event.keycode;
}
function sair(event){
    event.target.style.backgroundColor = '#E8E8E8';
}
