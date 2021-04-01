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
   
let quadradosVereador = etapas.filter(function(element, index){
    if(element.numeros==5){

        function inicia(){
            let numerosVereador = element.numeros;
            //Quantidade de input
            let quantidadeInputs = document.getElementsByClassName('numero');
            //Os dois primeiros inputs
            let doisPrimeirosInputs = document.querySelectorAll('.numero');

            for(let i = doisPrimeirosInputs.length;i<numerosVereador;i++){
                let divs = document.querySelector('div.d-1-3');
                let div = document.createElement('div');
                    divs.appendChild(div).classList.add('numero');
            }

                /*Adicionando os três input que estavam faltando para os 5 do vereador
                for(let i=doisPrimeirosInputs.length;i<numerosVereador;i++){
                    let inputs = document.querySelector('.d-1-3');
                    let input = document.createElement("input");
                        inputs.appendChild(input).classList.add('numero')
                }
                //adicionando os eventos aos tres inputs que faltavam para o vereador
                for(let i=doisPrimeirosInputs.length;i<quantidadeInputs.length;i++){
                    let element = quantidadeInputs[i];
                        element.addEventListener('mousedown',clicar);
                        element.addEventListener('mouseup',sair);
                    //Limitando o input a 1 caractere
                        element.setAttribute('maxlength',1);
                        element.setAttribute('type','number');
                }
                for(let i = 0;i<doisPrimeirosInputs.length;i++){
                    let input = document.createElement("input");
                        doisPrimeirosInputs[i].appendChild(input).classList.add('numero');
                        doisPrimeirosInputs[i].addEventListener('mousedown',clicar);
                        doisPrimeirosInputs[i].addEventListener('mouseup',sair);
                }
            let teste2 = document.querySelectorAll('input.numero');
                for(let i = 0;i<teste2.length;i++){
                    teste2[i].addEventListener('keydown',function(event){
                    let teclas = event.keyCode;
                        console.log(teclas);
                    });
                    teste2[i].setAttribute('maxlength',1);
                    teste2[i].setAttribute('type','number');
                } 
        }*/
        
    }
        window.addEventListener("load",inicia);
    }
    else{
        console.log('b');
    }
        
});

function clicar(event){
    event.target.style.backgroundColor = 'red';
}
function sair(event){
    event.target.style.backgroundColor = '#E8E8E8';
}
function clicou(event){
}


    


