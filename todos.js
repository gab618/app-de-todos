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

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElemement.onclick = addTodo;
renderTodos();