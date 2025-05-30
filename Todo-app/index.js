const openTaskFormBtn = document.getElementById('open-task-form-btn');
const taskForm = document.getElementById('task-form');
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');

const taskData = JSON.parse(localStorage.getItem('data')) || [];
let currentTask = {}

const addOrUpdateTask = () =>{
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title:removeSpecialChar(titleInput.value),
        date:dateInput.value,
        description: descriptionInput.value,
        
    }

    if(dataArrIndex === -1){
        taskData.unshift(taskObj);
    }else{
        taskData[dataArrIndex] = taskObj
    }
    localStorage.setItem('data',JSON.stringify(taskData))
    updateTaskContainer();
    reset()
}
const updateTaskContainer = () =>{
    tasksContainer.innerHTML = "";
    taskData.forEach(({id,title,date,description}) => {
        tasksContainer.innerHTML += `
        <div class="task" id="${id}">
            <p><strong>Title: </strong>${title}</p>
            <p><strong>Date: </strong>${date}</p>
            <p><strong>Description: </strong>${description}</p>
            <button type="button" class="btn" onclick="editTask(this)">Edit</button>
            <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
        </div>
        `
    });
}

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    currentTask = taskData[dataArrIndex]
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
    addOrUpdateTaskBtn.innerText = "Update Task"

    taskForm.classList.toggle('hidden')
    
}

const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem('data',JSON.stringify(taskData))

}

openTaskFormBtn.addEventListener('click',() => {
    taskForm.classList.toggle("hidden");
})
const removeSpecialChar = (str) => {
   return str.replace(/[^A-Za-z0-9\-\s]/g, '');
}

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle('hidden')
    currentTask = {}
    

}

closeTaskFormBtn.addEventListener('click', () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    if(formInputsContainValues){
        confirmCloseDialog.showModal()
    }else{
        reset()
    }
    
})

cancelBtn.addEventListener('click', () => confirmCloseDialog.close())
discardBtn.addEventListener('click', () => {
    
    confirmCloseDialog.close();
    reset()
})

taskForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    addOrUpdateTask()

})

