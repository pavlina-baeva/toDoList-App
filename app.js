const task = document.querySelector('.to-do__input');
const errorMessage = document.querySelector('.errorMessage');
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
function validateTask (text, list) {
    const taskText = task.value;
    if (taskText == '') {
        createError(task, 'Напишите задачу!');
        return false;
    } else {
        removeError(task);
    }

    /*list.forEach((newTask) => {
        if (newTask.text == text) {
            alert('Такая задача уже существует');

        }
    })
    */
}

function renderTaskList(list) {
    list.forEach(task => {
        let listHTML ='';
        //const cls = newTask.isComplete ? ;
        const taskHTML = `
        <div id='${newTask.id}' class='${cls}'>
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