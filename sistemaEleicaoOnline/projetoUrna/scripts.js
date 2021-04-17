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

let tituloCandidato = 'VEREADOR';
    if(tituloCandidato == 'VEREADOR'){
        vereador();
    }
    else{
        prefeito();
    }
 
        //Função que coloca as div's euivalentes ao numeros de digitos do candidato
        function vereador(){
            let numerosVereador = etapas[0].numeros;
            //Quantidade de input
            //Os dois primeiros inputs
            let doisPrimeirosDivs = document.querySelectorAll('.numero');
            //adiciona div referente ao numero de numeros do vereador
            for(let i = doisPrimeirosDivs.length;i<numerosVereador;i++){
                let divs = document.querySelector('div.d-1-3');
                let div = document.createElement('div');
                    divs.appendChild(div).classList.add('numero');
                let espacamento = document.querySelectorAll('div.numero')[i];
                espacamento.style.marginLeft = '5px'
                divs.style.marginRight = '2px'
            }
            //remove a foto do vereador;
            let divFotoVereador = document.querySelector('div.d-1-image img');
                divFotoVereador.remove();
            //remove o a legenda da voto do primeiro vereador
            let legendaVereador = document.querySelector('div.d-1-image');
                legendaVereador.textContent = "";
            //remove legenda do voto de vice prefeito inicial
            let legendaVice = document.querySelector('.small');
                legendaVice.textContent = "";
                legendaVice.style.border = 'none';
                
            //modifica a descrição do vereador escolhido
            let descricaoVereador = document.querySelector('div.d-1-4');
                descricaoVereador.innerHTML = `Nome: <br>
                Partido: <br>`
        
        }

        function prefeito(){
            let primeirasDivs = document.querySelectorAll('.numero');
            //Removendo os 5 campos de vereador
            for(let i = 2;i<primeirasDivs.length;i++){
                primeirasDivs[i].remove();
            }

            //Removendo o conteudo das divs
            let divNumeros = document.querySelector('div.d-1-3');
            let numeros = divNumeros.children;
            for(let i = 0;i<numeros.length;i++){
                numeros[i].textContent = "";
            }
            //remove a legenda da primeira foto;
            let legendaVereador = document.querySelector('div.d-1-image');
                legendaVereador.textContent = "";
            //remove legenda do voto de vice prefeito inicial
            let legendaVice = document.querySelector('.small');
                legendaVice.textContent = "";
                legendaVice.style.border = '1px solid black';
            //modifica a descrição do prefeito e vice
            let descricaoPrefeito = document.querySelector('div.d-1-4');
                descricaoPrefeito.innerHTML = `Nome: <br>
                Partido: <br>
                Vice-Prefeito:`;
                //modifica o titulo que informa para quem será o voto
                let tituloPrefeito = document.querySelector('div.d-1-2 span');
                    tituloPrefeito.textContent = 'PREFEITO';

        }
//função que adiciona os numeros as div's
function clicou(event){
    let divNumeros = document.querySelector('div.d-1-3');
    let numeros = divNumeros.children;
    for (let i =0;i<numeros.length;i++) {
        let valor = numeros[i].textContent;
        if(valor == ""){
            numeros[i].classList.remove('pisca');
            numeros[i].textContent = event;
           // numeros[++i].classList.add('pisca');
            break
        }
    }

    let numeroCandidato = '';
        for(let i=0;i<numeros.length;i++){
            let concatena = numeros[i].innerText;
            numeroCandidato += concatena;
        }

        for(let i = 0;i<etapas.length;i++){
            for(let k = 0;k<etapas[i].candidatos.length;k++){
                if(etapas[i].candidatos[k].numero == numeroCandidato){
                    dadosCandidato(numeroCandidato);
                }
            }
        }
        
    }

//Função que adiciona os dados do candidato
function dadosCandidato(numeroCandidato){
    //adiciona aos campos a foto e descrição do vereador escolhido
    for(let i =0; i<etapas.length;i++){
        for(let c = 0;c<etapas[i].candidatos.length;c++){
            if(etapas[i].candidatos[c].numero == numeroCandidato && etapas[i].candidatos[c].numero.length == 5){
                for(let f = 0;f<etapas[i].candidatos[c].fotos.length;f++){
                    let divFotosCandidatos = document.querySelector('div.d-1-right');
                    let firstChild = divFotosCandidatos.firstElementChild;
                    firstChild.innerHTML = `<img src="./images/${etapas[i].candidatos[c].fotos[f].url}">
                        ${etapas[i].candidatos[c].fotos[f].legenda}`

                    let identificacao = document.querySelector('div.d-1-4');
                    identificacao.innerHTML = `
                        Nome:${etapas[i].candidatos[c].nome}<br>
                        Partido:${etapas[i].candidatos[c].partido}<br>
                        `;
                }
            }
            else if(etapas[i].candidatos[c].numero == numeroCandidato && etapas[i].candidatos[c].numero.length == 2){
                for(let f = 0;f<etapas[i].candidatos[c].fotos.length;f++){
                    let divFt = document.querySelectorAll('.d-1-image');
                    console.log(divFt)
                        divFt[f].innerHTML = `
                        <img src="./images/${etapas[i].candidatos[c].fotos[f].url}">
                        ${etapas[i].candidatos[c].fotos[f].legenda}
                        `;
                    let identificacao = document.querySelector('div.d-1-4');
                        identificacao.innerHTML = `
                        Nome:${etapas[i].candidatos[c].nome}<br>
                        Partido:${etapas[i].candidatos[c].partido}<br>
                        Vice-Prefeito:${etapas[i].candidatos[c].vice}
                        `
                }
            }
        }
    }

}

//adiciona o voto confirmar ao sesscionStorage
let arrayVereadorConfirm = [];
function confirma(){
    let divNumeros = document.querySelector('div.d-1-3');
    let numeros = divNumeros.children;
    let numeroCandidato = '';
        for(let i=0;i<numeros.length;i++){
            let concatena = numeros[i].innerText;
            numeroCandidato += concatena;
        }

    console.log(numeroCandidato)
    if(numeros[0].textContent != ""){
    for(let i = 0;i<etapas.length;i++){
        for(let k = 0;k<etapas[i].candidatos.length;k++){
            if(etapas[i].candidatos[k].numero == numeroCandidato){
                
                let dados = {
                    nome: etapas[i].candidatos[k].nome,
                    numero: etapas[i].candidatos[k].numero,
                    partido: etapas[i].candidatos[k].partido,
                    vice: etapas[i].candidatos[i].vice,
                }
                arrayVereadorConfirm.push(dados);
                sessionStorage.setItem('arrayCandidatosConfirm',JSON.stringify(arrayVereadorConfirm));
                
            }
        }
    }
    prefeito();
    }
    else if(numeros[0].textContent == ""){ 
            let dados = {
                nome: ' ',
                numero: ' ',
                partido: ' ',
                vice: ' ',
            }
        arrayVereadorConfirm.push(dados);
        sessionStorage.setItem('arrayCandidatosConfirm',JSON.stringify(arrayVereadorConfirm));
        prefeito();
    }
}

function branco(){
    let divNumeros = document.querySelector('div.d-1-3');
    let numeros = divNumeros.children;
    for (let i =0;i<numeros.length;i++) {
            numeros[i].classList.remove('pisca');
            numeros[i].textContent = '';
           // numeros[++i].classList.add('pisca');
 
    }   
}