
var input = document.querySelector("input");
var ol = document.querySelector("#todo-list")
var todoContainer = document.querySelector("#todo-container");


var arr = []
function addTodo() {



    if (input.value == "") {
        alert("please fill to this todo")
        // arr.pop()
    } else {
    arr.push(input.value)
    console.log(arr)
    renderTodo()
    }

}

function clearTodo() {
    todoContainer.remove() 
    // arr.splice(0, arr.length)
    // return arr
    arr = []
    renderTodo()
}

function deleteTodo(index) {

    arr.splice(index, 1)
    renderTodo()
}

function editTodo(index) {

    var editvalue = prompt("Update this value");
    arr[index] = editvalue
    renderTodo()
}

function renderTodo() {

         ol.innerHTML = ""
        input.value = ""
        for (var i = 0; i < arr.length; i++) {
            ol.innerHTML += `<li class="list-style">${arr[i]}
        <button class="dlt-btn" onclick="deleteTodo(${i})"><i class="fa solid fa-trash"></i></button>
        <button class="edit-btn" onclick="editTodo(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
        </li>`


        }

    }

