function addTask() {
    const task = document.getElementById("taskInput")
    const taskText = task.value.trim()
    if (taskText !== "") {
        let listElement = document.createElement("li")
        listElement.setAttribute("class", "task-list")
        listElement.innerHTML = `<span id= "taskText"> ${taskText} </span>  
                            <button id="completeButton" class="btn-in-list" onclick="completeTask(this)"> Complete </button>
                            <button id="deleteButton" class="btn-in-list" onclick="deleteTask(this)"> Delete </button>`
        const todoList = document.getElementById("toDoList")
        todoList.appendChild(listElement)
        task.value = ""
    }
}

function completeTask(completeButton) {
    const listElement = completeButton.parentElement
    const taskTextElement = listElement.querySelector("#taskText")
    const taskText = taskTextElement.innerText
    listElement.innerHTML = `<strike><span id= "taskText"> ${taskText} </span></strike> 
                           <button id="incompleteButton" class="btn-in-list"  onclick="incompleteTask(this)"> Incomplete </button>
                           <button id="deleteButton"  class="btn-in-list" onclick="deleteTask(this)"> Delete </button>`

}
function incompleteTask(incompleteButton) {
    const listElement = incompleteButton.parentElement
    const taskTextElement = listElement.querySelector("#taskText")
    const taskText = taskTextElement.innerText
    listElement.innerHTML = `<span id= "taskText"> ${taskText} </span>  
                            <button id="completeButton" class="btn-in-list"  onclick="completeTask(this)"> Complete </button>
                            <button id="deleteButton"  class="btn-in-list" onclick="deleteTask(this)"> Delete </button>`
}


function deleteTask(deleteButton) {
    const listElement = deleteButton.parentElement
    listElement.remove()
}
