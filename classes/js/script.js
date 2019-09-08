var httpService = new HttpService();

function init() {
  httpService.request (
    'GET',
    'http://jsonplaceholder.typicode.com/todos',
    function (todos) {
      populateTodoList(todos);
    }
  );
}

init();

function populateTodoList(todos) {
  const list = document.querySelector('.todo-list');
  todos.forEach(function(todo) {
    const listItem = document.createElement('li');
    listItem.innerHTML = todo.title;
    list.appendChild(listItem);
  });
}