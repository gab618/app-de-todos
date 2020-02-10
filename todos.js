var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElemement = document.querySelector('#app button');

var todos = [
    'Fazer cafe',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+pos+')');
        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
    }
}

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}

buttonElemement.onclick = addTodo;
renderTodos();