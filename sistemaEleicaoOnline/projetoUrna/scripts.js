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

let existe;
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
//console.log(teste);
    dadosCandidato(numeroCandidato);             
}

//Função que adiciona os dados do candidato
function dadosCandidato(numeroCandidato){
    //adiciona aos campos a foto e descrição do vereador escolhido
    for(let i =0; i<etapas.length;i++){
        for(let c = 0;c<etapas[i].candidatos.length;c++){
            if(etapas[i].candidatos[c].numero == numeroCandidato && etapas[i].numeros == 5){
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
                    identificacao.style.textAlign='left';
                    identificacao.style.fontSize = '13pt';
                } 
                existe = true; 
                return;
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
                        identificacao.style.textAlign='left';
                        identificacao.style.fontSize = '13pt';
                }
                return;
            }
            else if(etapas[i].candidatos[c].numero != numeroCandidato){
                existe = false;
            }
        }
        
    }
        if(existe == false){
            let nulo = document.querySelector('.d-1-4');
                nulo.innerHTML = 'VOTO NULO';
                nulo.style.textAlign = 'center';
                nulo.style.fontSize = '20pt'
        return;
        }
    
}
//conta quantas vezes o botão confirma foi clicado;
let contadorFim;
contadorFim = 0;
//adiciona o voto confirmar ao sesscionStorage
let arrayVereadorConfirm = [];
function confirma(){
    contadorFim++;
    //concatenando os números informados
    let divNumeros = document.querySelector('div.d-1-3');
    let numeros = divNumeros.children;
    let numeroCandidato = '';
        for(let i=0;i<numeros.length;i++){
            let concatena = numeros[i].innerText;
            numeroCandidato += concatena;
        }
    //pegando a div ontem tem o numeros dos candidatos
    let divNCandidato = document.querySelector('.d-1-3');
        //se a quantidade de elementos for diferente de zero então  tem alguma coisa dentro de cada elemento
        if(divNCandidato.childElementCount != 0){
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
    //se for igual a zero, não tem elemento algum então o botão branco foi acionado
    else if(divNCandidato.childElementCount == 0){ 
            let dados = {
                nome: '',
                numero: '',
                partido: '',
                vice: '',
            }
        arrayVereadorConfirm.push(dados);
        sessionStorage.setItem('arrayCandidatosConfirm',JSON.stringify(arrayVereadorConfirm));
        let votoBranco = document.querySelector('.d-1-3');
        votoBranco.textContent = ''
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
            div1.classList.add('numero');
            div2.classList.add('numero');
        votoBranco.appendChild(div1);
        votoBranco.appendChild(div2);
        votoBranco.style.textAlign = 'left';

        prefeito();
    }

    //se o contador for igual a 2 significa que foi confirmado o voto de vereador e prefeito, então chegou ao fim
    if(contadorFim ==2){
        let fim = document.querySelector('.d-1-3');
            fim.innerHTML = `FIM`;
            fim.style.fontSize ='20pt';
            fim.style.textAlign = 'center';
        let divEspecificacoes = document.querySelector('.d-1-4');
            divEspecificacoes.textContent = '';
        let divTitulo = document.querySelector('.d-1-2');
            divTitulo.textContent = '';
        let divVotarEm = document.querySelector('.d-1-1');
            divVotarEm.textContent = '';
    }
}

function branco(){
    //zerando todos os digitos informados
    let divNumeros = document.querySelector('div.d-1-3');
    let numeros = divNumeros.children;
    for (let i =0;i<numeros.length;i++) {
            numeros[i].classList.remove('pisca');
            numeros[i].textContent = '';
           // numeros[++i].classList.add('pisca');
    }
    //colocando a div d-1-3 com a frase de voto em branco
    let divVotoBranco = document.querySelector('.d-1-3');
        divVotoBranco.textContent = 'VOTO EM BRANCO';
        divVotoBranco.style.fontSize ='20pt';
        divVotoBranco.style.textAlign = 'center';
    let divEspecificacoes = document.querySelector('.d-1-4');
        divEspecificacoes.textContent = '';
} 

//conta quantas vezes o botão branco foi acionado
let contadorVtBranco;
    contadorVtBranco = 0;

function corrige(){
    //zerando todos os digitos informados
    let divNumeros = document.querySelector('div.d-1-3');
    let numeros = divNumeros.children;
    for (let i =0;i<numeros.length;i++){
            numeros[i].classList.remove('pisca');
            numeros[i].textContent = '';
           // numeros[++i].classList.add('pisca');
    }
    //pegando a div das imagens
    let telaRight = document.querySelector('.d-1-image ');
    let divImagens = telaRight.childElementCount;
        // se a o numeros de filhos for igual a 0, significa que não tem imagem, então basta zerar as informações
        if(divImagens==0){
        //modifica a descrição do vereador escolhido
        let descricaoVereador = document.querySelector('div.d-1-4');
                descricaoVereador.innerHTML = `Nome: <br>
            Partido: <br>`
            descricaoVereador.style.textAlign = 'left';
            descricaoVereador.style.fontSize = '13pt'
        }
        //se for diferente de 0, então tem imagens.. exclui as imagens e atualiza as informações
        else if(divImagens!=0){
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
            descricaoVereador.style.textAlign = 'left';
            descricaoVereador.style.fontSize = '13pt'
        }
        // se a div que contem os numeros for igual a string 'VOTO EM BRANCO' o botão branco foi acionado
        if(divNumeros.textContent == 'VOTO EM BRANCO'){
            contadorVtBranco++;
            //altera o texto 'VOTO EM BRANCO'
            let corrigeBranco = document.querySelector('div.d-1-3');
                corrigeBranco.textContent = '';
                corrigeBranco.style.textAlign = 'left';

            let titulo = document.querySelector('div.d-1-2 span');
                if(titulo.textContent == 'VEREADOR'){
                    console.log('aaaa')
                    for(let i = 0;i<etapas[0].numeros;i++){
                        let div1 = document.createElement('div');
                        div1.classList.add('numero');
                        corrigeBranco.appendChild(div1);
                        let espacamento = document.querySelectorAll('div.numero')[i];
                            espacamento.style.marginLeft = '5px'
                            div1.style.marginRight = '2px'
                    }
                
                }
                if(titulo.textContent == 'PREFEITO'){
                    for(let i = 0;i<etapas[1].numeros;i++){
                        let div1 = document.createElement('div');
                        div1.classList.add('numero');
                        corrigeBranco.appendChild(div1);
                        let espacamento = document.querySelectorAll('div.numero')[i];
                            espacamento.style.marginLeft = '5px'
                            div1.style.marginRight = '2px'
                    }
                }
           
        }
}
