var state = {
    isDialogOpen: false,
    isNewDialogOpen: false,
    isDeleteOpen: false,
    tasks: [],
};

init();

function init() {
    // dialog
    handleDialog();
    handleNewDialog();
    handleDeleteDialog();
    var buttonElement = document.getElementById('openDialogButton');
    buttonElement.addEventListener('click', handleDialog);

    // create task
    var submitButtonElement = document.getElementById('createTaskButton');
    submitButtonElement.addEventListener('click', onCreateTask);

    var editElement = document.getElementById('editButton');
    editElement.addEventListener('click', onEditTask);

    var noButton = document.getElementById('deleteTaskButtonNO');
    noButton.addEventListener('click', handleDeleteDialog);

    var yesButton = document.getElementById('deleteTaskButton');
    yesButton.addEventListener('click', deleteTaskFinal);

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
}
function handleNewDialog() {
    var domElement = document.getElementById('newDialog');

    if (state.isNewDialogOpen == true) {
        domElement.style = 'display: block';
        state.isNewDialogOpen = false;
    } else {
        domElement.style = 'display: none';
        state.isNewDialogOpen = true;
    }
}
function handleDeleteDialog() {
    var domElement = document.getElementById('deleteDialog');

    if (state.isDeleteOpen == true) {
        domElement.style = 'display: block';
        state.isDeleteOpen = false;
    } else {
        domElement.style = 'display: none';
        state.isDeleteOpen = true;
    }
}

function onCreateTask() {
    var descriptionInputElement = document.getElementById('descriptionInput');
    var statusSelectElement = document.getElementById('statusSelect');

    saveTask(descriptionInputElement.value, statusSelectElement.value);

}
function onEditTask() {
    var taskId = document.getElementById("printTask").innerHTML;

    var descriptionEditElement = document.getElementById('newDescriptionInput');
    var statusEditElement = document.getElementById('newStatusSelect');

    state.tasks[taskId - 1].description = descriptionEditElement.value;
    state.tasks[taskId - 1].status = statusEditElement.value;

    document.getElementById('' + taskId + '').innerHTML = descriptionEditElement.value;
    handleNewDialog();
}

function saveTask(description, status) {
    // save your task
    state.tasks.push({ description, status });
    console.log(state.tasks);
    show(description, status);
   
}
function show(description, status) {
    var x = state.tasks.length;
    var newElement = document.createElement('div');
    newElement.innerHTML = /*status + " " + */description
    newElement.setAttribute('id', x);
    // newElement.setAttribute('onclick', 'alertId(' + x + ')');
    document.body.appendChild(newElement);

    var pencil = document.createElement('img');
    var trash = document.createElement('img');
    pencil.setAttribute("src", "https://assets.webiconspng.com/uploads/2017/01/Pencil-Icon-Picture.png");
    trash.setAttribute("src", "https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg");
    document.body.appendChild(pencil);
    document.body.appendChild(trash);

    pencil.setAttribute('id', "pencil"+x);
    trash.setAttribute('id', "trash"+x);

    pencil.setAttribute('onclick', 'alertId(' + x + ')');
    // pencil.addEventListener('click', handleNewDialog);
    trash.setAttribute('onclick', 'deleteTask(' + x + ')');
    
  
}

function alertId(x) {
    //    var oldDescription = document.getElementById(x).innerHTML;
    var oldDescription = state.tasks[x - 1].description;
    var oldStatus = state.tasks[x - 1].status;
    var taskId = document.getElementById(x).id;

    handleNewDialog();
    document.getElementById("printTask").innerHTML = taskId;
    document.getElementById('newDescriptionInput').value = oldDescription
    document.getElementById('newStatusSelect').value = oldStatus;

    var editElement = document.getElementById('editButton');
    editElement.addEventListener('click', editTask(taskId));



}

function deleteTask(x) {
    // implement logic
    handleDeleteDialog();

var taskId = document.getElementById(x).id;

document.getElementById("printTask2").innerHTML = taskId;
    // // alert(state.tasks[x - 1].decription);
    // handleDeleteDialog();
    // alert("x="+x+"taskID="+taskId);
}

function editTask(x) {
    // implement logic
    var descriptionEdit = document.getElementById("newDescriptionInput").value;
    var statusEdit = document.getElementById("newStatusSelect").value;

    state.tasks[x - 1].description = descriptionEdit;
    state.tasks[x - 1].status = statusEdit;
    console.log(state.tasks);

}

function deleteTaskFinal(x) {
    var elem = document.getElementById('printTask2').innerHTML;
    state.tasks.splice(elem-1,1);
    console.log(state.tasks);
    var deletedElement = document.getElementById(''+elem+'');
    var deletedPencil = document.getElementById('pencil'+elem+'');
    var deletedTrash = document.getElementById('trash'+elem+'');
    
    
    deletedElement.removeChild(deletedElement.childNodes[0]);
    deletedPencil.parentNode.removeChild(deletedPencil);
    deletedTrash.parentNode.removeChild(deletedTrash);
    // deletedTrash.removeChild(deletedTrash.childNodes[0]);


    handleDeleteDialog();
};