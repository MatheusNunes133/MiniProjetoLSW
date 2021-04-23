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

let objFuncoes = {
    //remove o onclick do botão confirma
    removeOnclick(){
        let btnConfirma = document.querySelector('.botao--confirma');
            btnConfirma.removeAttribute('onclick');
    },
    //adiciona o onclick ao botão confirma
    adicionaOnclick(){
    let btnConfirma = document.querySelector('.botao--confirma');
        btnConfirma.setAttribute('onclick', 'confirma()');
    },

    //função que adiciona os numeros as div's
    adicionaNumeros(event){
        let divNumeros = document.querySelector('div.d-1-3');
        let numeros = divNumeros.children;
            for (let i =0;i<numeros.length;i++) {
                let valor = numeros[i].textContent;
                    if(valor == ""){
                        numeros[i].classList.remove('pisca');
                        numeros[i].textContent = event;
                        break
                    }
                }
    },
    // concatena todos os numumeros que o usuário informar
    concatenaNumeros(){
        let divNumeros = document.querySelector('div.d-1-3');
        let numeros = divNumeros.children;
        let numeroCandidato = '';
            for(let i=0;i<numeros.length;i++){
                let concatena = numeros[i].innerText;
                    numeroCandidato += concatena;
            }
        return numeroCandidato;
    },

    //Função que adiciona os dados do candidato
    dadosCandidato(numeroCandidato){
        existe = false;
        //adiciona aos campos a foto e descrição do vereador escolhido
        for(let i =0; i<etapas.length;i++){
            for(let c = 0;c<etapas[i].candidatos.length;c++){
                if(etapas[0].candidatos[c].numero == numeroCandidato && etapas[i].numeros == 5){
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
                
                else if(etapas[1].candidatos[c].numero == numeroCandidato && etapas[i].candidatos[c].numero.length == 2){
                    for(let f = 0;f<etapas[i].candidatos[c].fotos.length;f++){
                        let divFt = document.querySelectorAll('.d-1-image');
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
                    existe = true;
                    return;
                }
                else if(etapas[0].candidatos[c].numero != numeroCandidato && numeroCandidato.length == 5){
                    existe = false;
                }
                else if(etapas[1].candidatos[c].numero!= numeroCandidato && numeroCandidato.length == 2){
                    existe = false;
                }
                
            }
            
        }
            if(existe == false){
                let nulo = document.querySelector('.d-1-4');
                    nulo.innerHTML = 'VOTO NULO';
                    nulo.style.textAlign = 'center';
                    nulo.style.fontSize = '20pt'
                    existe = false;
            return;
            }
        
    },
    // remove o voto branco em retorna a div sem conteúdo dentro
    removeVtBranco(){
        let corrigeBranco = document.querySelector('div.d-1-3');
            corrigeBranco.textContent = '';
            corrigeBranco.style.textAlign = 'left';
        return corrigeBranco;
    },

    //zera os numeros das divs
    zeraNumeros(){
        let divNumeros = document.querySelector('div.d-1-3');
        let numeros = divNumeros.children;
            for (let i =0;i<numeros.length;i++) {
                numeros[i].classList.remove('pisca');
                numeros[i].textContent = '';
            }
    },
    // remove a descição da foto dos vereadores
    removeDescVereador(){
        let descricaoVereador = document.querySelector('div.d-1-4');
            descricaoVereador.innerHTML = `Nome: <br>
                Partido: <br>`
            descricaoVereador.style.textAlign = 'left';
            descricaoVereador.style.fontSize = '13pt'
    },
    //remove a foto dos vereadores
    removeFtVereador(){
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
        },
        //corrige o voto em branco
        corrigeVtBranco(){
            let vtBrancoRemovido = objFuncoes.removeVtBranco();;

            let titulo = document.querySelector('div.d-1-2 span');
                if(titulo.textContent == 'VEREADOR'){
                    for(let i = 0;i<etapas[0].numeros;i++){
                        let div1 = document.createElement('div');
                            div1.classList.add('numero');
                        vtBrancoRemovido.appendChild(div1);
                        let espacamento = document.querySelectorAll('div.numero')[i];
                            espacamento.style.marginLeft = '5px'
                            div1.style.marginRight = '2px'
                    }

                }
                if(titulo.textContent == 'PREFEITO'){
                    for(let i = 0;i<etapas[1].numeros;i++){
                        let div1 = document.createElement('div');
                            div1.classList.add('numero');
                        vtBrancoRemovido.appendChild(div1);
                        let espacamento = document.querySelectorAll('div.numero')[i];
                            espacamento.style.marginLeft = '5px'
                            div1.style.marginRight = '2px'
                    }
                }
        },

    //Função que coloca as div's euivalentes ao numeros de digitos do candidato
    vereador(){
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
            Partido: <br>`;
            descricaoVereador.style.textAlign = 'left';
    
    },

    prefeito(){
        let primeirasDivs = document.querySelectorAll('.numero');
        //Removendo os 5 campos de vereador
        for(let i = 2;i<primeirasDivs.length;i++){
            primeirasDivs[i].remove();
        }

        //Removendo o conteudo das divs
        objFuncoes.zeraNumeros();
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
            descricaoPrefeito.style.fontSize = '13pt'
            descricaoPrefeito.style.textAlign = 'left';
            //modifica o titulo que informa para quem será o voto
            let tituloPrefeito = document.querySelector('div.d-1-2 span');
                tituloPrefeito.textContent = 'PREFEITO';

    }
}

    objFuncoes.removeOnclick();
    objFuncoes.vereador();

        function clicou(event){ 
            objFuncoes.adicionaNumeros(event);
            let numeroConcatenado = objFuncoes.concatenaNumeros();
            objFuncoes.dadosCandidato(numeroConcatenado);
    
            if(existe == true){
                objFuncoes.adicionaOnclick();
            }
            let divNulo = document.querySelector('div.d-1-4');
            if(divNulo.textContent == 'VOTO NULO'){
                objFuncoes.adicionaOnclick();
            }
        }


//conta quantas vezes o botão confirma foi clicado;
let contadorFim = 0;

        //adiciona o voto confirmar ao sesscionStorage
        function confirma(){
            contadorFim++;
            let divNumeros = document.querySelector('div.d-1-3');
                if(divNumeros.textContent == 'VOTO EM BRANCO'){
                    let vtBrancoRemovido = objFuncoes.removeVtBranco();
            
                    for(let i = 0;i<etapas[1].numeros;i++){
                        let div1 = document.createElement('div');
                            div1.classList.add('numero');
                            vtBrancoRemovido.appendChild(div1);
                        let espacamento = document.querySelectorAll('div.numero')[i];
                            espacamento.style.marginLeft = '5px'
                            div1.style.marginRight = '2px'
                    }
                objFuncoes.removeOnclick();
                }
    
                //se o contador for igual a 2 significa que foi confirmado o voto de vereador e prefeito, então chegou ao fim
                if(contadorFim ==2){
                    let images = document.querySelector('div.d-1-right');
                        images.remove();
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
                else{
                    objFuncoes.removeOnclick();
                    objFuncoes.prefeito();
                }
    
        }

        function branco(){
            //zerando todos os digitos informados
            objFuncoes.zeraNumeros();
            //colocando a div d-1-3 com a frase de voto em branco
            let divVotoBranco = document.querySelector('.d-1-3');
                divVotoBranco.textContent = 'VOTO EM BRANCO';
                divVotoBranco.style.fontSize ='20pt';
                divVotoBranco.style.textAlign = 'center';
            let divEspecificacoes = document.querySelector('.d-1-4');
                divEspecificacoes.textContent = '';
            objFuncoes.adicionaOnclick();
        } 


        function corrige(){
            //zerando todos os digitos informados
            objFuncoes.zeraNumeros();
            //pegando a div das imagens
            let telaRight = document.querySelector('.d-1-image ');
            let divImagens = telaRight.childElementCount;
            let divNumeros = document.querySelector('div.d-1-3');
                // se a o numeros de filhos for igual a 0, significa que não tem imagem, então basta zerar as informações
                if(divImagens==0){
                //modifica a descrição do vereador escolhido
                objFuncoes.removeDescVereador();
                objFuncoes.removeOnclick();
                }
                //se for diferente de 0, então tem imagens.. exclui as imagens e atualiza as informações
                else if(divImagens!=0){
                //remove a foto do vereador;
                objFuncoes.removeFtVereador();
                objFuncoes.removeOnclick();
                }
                // se a div que contem os numeros for igual a string 'VOTO EM BRANCO' o botão branco foi acionado
                if(divNumeros.textContent == 'VOTO EM BRANCO'){
                objFuncoes.corrigeVtBranco();
                objFuncoes.removeOnclick();
                }
        }
