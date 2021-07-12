var enterButton = document.getElementById("enter");

var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputlength(){
    return input.value.length;
}
function listlength(){
    return item.length;
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    function crossOut(){
        li.classList.toggle("done")
    }
    li,addEventListener("click" , crossOut);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click" , deletListItem);

    function deletListItem(){
        li.classList.add("delete");
    }
}
function addListAfterClick(){
    if(inputlength() >0 ){
        createListElement();
    }
}
function addListAfterKeyPress(event) {
    if(inputlength() >0 && event.which ===13){
        createListElement();
    }
}

enterButton.addEventListener("click" , addListAfterClick);
input.addEventListener("keypress" , addListAfterKeyPress);