const task = document.querySelector('.to-do__input');
const errorMessage = document.querySelector('.errorMessage');
const listElement = document.querySelector('.to-do__list');
const addBtn = document.querySelector('.to-do__add-btn');
const taskList = [];

//click for adding task
addBtn.onclick = () => {
    const taskText = task.value;;
    if (validateTask(taskText) === true) {
        addTask(taskText, taskList);
        task.value = '';
        renderTaskList(taskList);
    }
}

//add new task to the list
function addTask (text, list) {
    const timestamp = Date.now();
    const newTask = {
        id:timestamp,
        text,
        isComplete:false
    }
    list.push(newTask);
}

//error functions for input-validation
function createError(input, text) {
    input.classList.add('error');
    errorMessage.innerText = text;
    
}

function removeError(input) {
    if (input.classList.contains('error')) {
        errorMessage.innerText='';
        input.classList.remove('error');
    }
}

//check input for being full & not repeating previous tasks
function validateTask (text) {
    let isValid = true;
    if (text == '') {
        createError(task, 'Напишите задачу!');
        isValid = false;
    } else {
        removeError(task);
        isValid = true;
    }
    return isValid;
    /*list.forEach((newTask) => {
        if (newTask.text == text) {
            alert('Такая задача уже существует');
        }
    })
    */
}

//function to renderi tasklist
function renderTaskList(list) {
    let listHTML = '';
    list.forEach(task => {
        //const cls = newTask.isComplete ? 'to-do__newTask to-do__completed' : 'to-do__newTask';
        const taskHTML = `
        <div id='${task.id}' class='to-do__newTask'>
        <input type="checkbox"><div class = "to-do__checkbox-div"></div>
        <div class="to-do__taskText">${task.text}</div>
        <button class="to-do__delBtn">Удалить</button>
        </div>
        `
        listHTML = listHTML + taskHTML;
    })
    listElement.innerHTML = listHTML;
}

//change task's style when it's done
function completeTask () {

}

//delete task from the list 
function deleteTask () {

}

//delete all tasks from the list
function deleteTaskList () {

}