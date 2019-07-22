
var state = {
  isDialogOpen: false,
  tasks: [],
};

var dialogTypeToContentDict = {
    "add": "aaa",
    "edit": "bbb",
    "delete": "ccc"
}

function getDialogContent(dialogType) {
    return dialogTypeToContentDict[dialogType];
}

function getAddDialogForm() {
    var form = document.createElement('form');
    var input = document.createElement('input');
    var select = document.createElement('select');
    var button = document.createElement('button');
    
    return HTMLElement;
}