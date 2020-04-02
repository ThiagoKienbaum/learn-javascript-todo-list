//Armazena os elementos HTML em variaveis
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Lista de tarefas
var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];

//Funcao que renderiza as tarefas na lista
function renderTarefas(){
    //Limpar a lista antes de renderizar para nao duplicar valores
    listElement.innerHTML = '';

    for (tarefa of tarefas){
        //Cria a lista/texto/link e texto para exluir item
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa);
        var linkElement = document.createElement('span');
        var pos = tarefas.indexOf(tarefa);
    
        //Anexa os elementos a UL para renderizacao
        linkElement.setAttribute('onclick', 'deleteTarefa('+ pos +')')
        linkElement.setAttribute('class', 'glyphicon glyphicon-remove');
        tarefaElement.appendChild(tarefaText);
        tarefaElement.appendChild(linkElement);
        listElement.appendChild(tarefaElement);        
    }
}

renderTarefas();

//Funcao para add novas tarefas
function addTarefa(){
    //Pega o valor digitado no input, insere no array e chama a renderizacao
    var inputText = inputElement.value;
    tarefas.push(inputText);
    inputElement.value = '';
    renderTarefas();
    saveToStorage();
}

buttonElement.onclick = addTarefa;

//Funcao para remover tarefas
function deleteTarefa(pos){
    tarefas.splice(pos, 1);
    renderTarefas();
    saveToStorage();
}

//Funcao para salvar no local storage
function saveToStorage(){
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
}