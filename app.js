const task = document.querySelector('.to-do__input');
const taskList = [];

//add new task to the list
function addTask (text, list) {
    const timestamp = Date.now();
    const newTask = {
        id:timestamp,
        text,
        isComplete:false
    }
    taskList.push(newTask);
    renderTaskList(taskList);
    /*if (valudateInput(newTask, taskList)) {
    list.push(newTask);
    }*/
}

function createError(input, text) {
    const parent = input.parentNode;
    const errorElement = document.createElement('label');
    errorElement.className = 'errorMessage';
    errorElement.textContent = text;
    input.classList.add('error');
    parent.append(errorElement);
}

function removeError(input) {
    const parent = input.parentNode;
    if (input.classList.contains('error')) {
        parent.querySelector('.errorMessage').remove();
        input.classList.remove('error');
    }
}

//check input for being full & not repeating previous task
function validateTask (text, list) {
    /*let 
    const taskText = task.value;
    if (taskText == '') {
        createError(task, 'Напишите задачу!');
    } else {
        removeError(task);
    }

    list.forEach((newTask) => {
        if (newTask.text == text) {
            alert('Такая задача уже существует');

        }
    })
    */
}

function renderTaskList(list) {
    list.forEach(task => {
        const taskHTML = `
        <div id='${newTask.id}' class='${}'>
        <input type="checkbox" ${checked}><div class = "to-do__checkbox-div"></div>
        <div class="to-do__taskText">${task.text}</div>
        <button class="to-do__deleteBtn">Удалить</button>
        </div>
        `
    })
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