var state = {
  isDialogOpen: false,
  tasks: [],
};

init();

function init() {
  // dialog
  handleDialog();
  var buttonElement = document.getElementById('openDialogButton');
  buttonElement.addEventListener('click', handleDialog);

  // create task
  var submitButtonElement = document.getElementById('createTaskButton');
  submitButtonElement.addEventListener('click', onCreateTask);
}

function handleDialog() {
  var domElement = document.getElementById('dialog');

  if (state.isDialogOpen == true) {
    domElement.style = 'display: block';
    state.isDialogOpen = false;
  } else {
    domElement.style = 'display: none';
    state.isDialogOpen = true;
  }
}

function onCreateTask() {
  var descriptionInputElement = document.getElementById('descriptionInput');
  var statusSelectElement = document.getElementById('statusSelect');
  saveTask(descriptionInputElement.value, statusSelectElement.value);
}

function saveTask(description, status) {
  // save your task
  state.tasks.push({description, status});
  console.log(state.tasks);
}

function deleteTask(taskId) {
  // implement logic
}

function editTask(taskId, description, status) {
  // implement logic
}
