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
   
if(etapas[0].titulo=='VEREADOR'){

    function inicia(){
        let numerosVereador = etapas[0].numeros;
        //Quantidade de input
        //Os dois primeiros inputs
        let doisPrimeirosInputs = document.querySelectorAll('.numero');

        for(let i = doisPrimeirosInputs.length;i<numerosVereador;i++){
            let divs = document.querySelector('div.d-1-3');
            let div = document.createElement('div');
                divs.appendChild(div).classList.add('numero');
            let espacamento = document.querySelectorAll('div.numero')[i];
            espacamento.style.marginLeft = '5px'
            divs.style.marginRight = '2px'
        }
    
    }
    window.addEventListener("load",inicia);
}      


    function clicou(event){
        let divNumeros = document.querySelector('div.d-1-3');
        let numeros = divNumeros.children;
        let valor1 = numeros[0].textContent;
        let valor2 = numeros[1].textContent;
        let valor3 = numeros[2].textContent;
        let valor4 = numeros[3].textContent;
        let valor5 = numeros[4].textContent;
    
            if(valor1 == ""){
                numeros[0].classList.remove('pisca');
                numeros[0].textContent = event; 
                numeros[1].classList.add('pisca');
            }
            else if(valor2 == ""){
                numeros[1].classList.remove('pisca');
                numeros[1].textContent = event; 
                numeros[2].classList.add('pisca');
            }
                else if(valor3 == ""){
                    numeros[2].classList.remove('pisca');
                    numeros[2].textContent = event;
                    numeros[3].classList.add('pisca');
                }
                    else if(valor4 == ""){
                        numeros[3].classList.remove('pisca');
                        numeros[3].textContent = event;
                        numeros[4].classList.add('pisca');
                    }
                        else if(valor5 == ""){
                            numeros[4].classList.remove('pisca');
                            numeros[4].textContent = event;
                        }
    
        let numeroCandidato = '';
            for(let i=0;i<numeros.length;i++){
                let concatena = numeros[i].innerText;
                numeroCandidato += concatena;
            }
            if(numeroCandidato == etapas[0].candidatos[0].numero){
                let divFotosCandidatos = document.querySelector('div.d-1-right');
                let firstChild = divFotosCandidatos.firstElementChild;
                    firstChild.innerHTML = `<img src="./images/38111.jpg">
                    VEREADOR`
                let lastChild = divFotosCandidatos.lastElementChild;
                    lastChild.remove();
    
                let identificacao = document.querySelector('div.d-1-4');
                    identificacao.innerHTML = `
                    Nome:${etapas[0].candidatos[0].nome}<br>
                    Partido:${etapas[0].candidatos[0].partido}<br>
                    `;
            }
            else if(numeroCandidato == etapas[0].candidatos[1].numero){
                let divFotosCandidatos = document.querySelector('div.d-1-right');
                let firstChild = divFotosCandidatos.firstElementChild;
                    firstChild.innerHTML = `<img src="./images/77222.jpg">
                    VEREADOR`
                let lastChild = divFotosCandidatos.lastElementChild;
                    lastChild.remove();
    
                    let identificacao = document.querySelector('div.d-1-4');
                    identificacao.innerHTML = `
                    Nome:${etapas[1].candidatos[1].nome}<br>
                    Partido:${etapas[1].candidatos[1].partido}<br>
                    `;
            }
}


    


