// Pegamos o input em que o usuário digita
var userInput = document.querySelector('#userInput');

// Pegamos o botão em que o usuário pode clicar pra cadastrar nova tarefa
var btnCreateTask = document.querySelector('#enter');

// Pegamos a lista que vai guardar as tarefas
var listEl = document.querySelector('.listItems');

// Nessa função a gente cadastra nova tarefa, e já adiciona os eventos de remover e completar
function addTask(text){

	if (text) {

		// Limpamos o campo onde o usuário digitou
		userInput.value = '';

		// Criamos um novo elemento LI pra adicionar na lista
		let li = document.createElement('li');

		// Adicionamos o texto que o usuário digitou dentro do LI, e também o botão de remover
		li.innerHTML = `
			${text}
			<button>X</button>
		`;

		// Adicionamos o elemento na lista
		listEl.appendChild(li);

		// Pegamos o botão de remover que está dentro do elemento LI que criamos
		let removeBtn = li.querySelector('button');

		// Adicionamos um evento de clique nesse botão
		removeBtn.addEventListener('click', e=>{
			
			// Essa parte é muito importante, pois serve para evitar que o evento de clique 'se propague' para o elemento LI. Com isso, o evento só irá servir para o botão de remover. (Isso evita que ao clicar no botão de remover, a tarefa seja marcada como concluída).
			e.stopPropagation();

			// Aqui adicionamos a classe 'delete' no elemento da lista. Essa classe já tava pronta no CSS que o Prof passou.
			li.classList.add('delete');

		});

		// Aqui adicionamos o evento de clique no elemento LI que criamos. Ao clicar, a ideia é que a tarefa seja concluída.
		li.addEventListener('click', e=>{

			// Adicionamos a classe 'done' ao elemento LI que criamos. Essa classe também estava pronta no CSS
			li.classList.toggle('done');
			
		});

	} else {
		alert('Não é possível adicionar um item vazio a lista.');
	}

}

userInput.addEventListener('keyup', e=>{

	// Aqui adicionamos um evento de teclado para saber quando o usuário apertou a tecla Enter. Ao clicar, será criada uma nova tarefa.
	if (e.code == 'Enter') addTask(userInput.value);

});

btnCreateTask.addEventListener('click', e=>{
	
	// Aqui adicionamos o evento de clique no botão de criar uma nova tarefa.
	addTask(userInput.value);

});