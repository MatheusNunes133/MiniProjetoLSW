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
                let espacamento = document.querySelectorAll('div.numero')[i];
                espacamento.style.marginLeft = '5px'
                divs.style.marginRight = '2px'
            }
        
    }
        window.addEventListener("load",inicia);
    }       
});

function clicar(event){
    event.target.style.backgroundColor = 'red';
}
function sair(event){
    event.target.style.backgroundColor = '#E8E8E8';
}

function clicou(event){

let teste1 = document.querySelectorAll('div.numero');
        if(event == 1){
            
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
            
        }
        if(event == 2){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
                
        }
        if(event == 3){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        }
        if(event == 4){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        }
        if(event==5){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        }
        if(event==6){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        }
        if(event==7){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        }
        if(event==8){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        }
        if(event==9){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        }
        if(event==0){
            if(teste1[0].textContent == ''){
                teste1[0].textContent = event;
            }
            else if(teste1[1].textContent == ''){
                teste1[1].textContent = event;
            }
                else if(teste1[2].textContent == ''){
                   teste1[2].textContent = event; 
                }
                    else if(teste1[3].textContent == ''){
                        teste1[3].textContent = event;
                    }
                        else if(teste1[4].textContent == ''){
                            teste1[4].textContent = event;
                        }
        } 
}


    


