document.addEventListener("DOMContentLoaded",loadTasks);
function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskText=taskInput.value.trim();
    if(taskText==="")return;

    let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({text:taskText,completed:false});
    localStorage.setItem("tasks",JSON.stringify(tasks));
    taskInput.value="";
}

function renderTasks(){
    const taskList=document.getElementById("taskList");
    taskList.innerHTML="";
    let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task,index)=>{
        let li=document.createElement("li");
        li.textContent=task.text;
        li.className=task.completed?"completed":"";
        li.oneClick=()=>toggleTask(index);
        let deleteBtn=document.createElement("button");
        deleteBtn.textContent="delete";
        deleteBtn.onclick=(e)=>{
            e.stopPropagation();
            deleteTask(index);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
})

}

    function toggleTask(index){
        let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
        tasks(index).completed=tasks(index).completed;
        localStorage.setItem("tasks",JSON.stringify(tasks));
        renderTasks();
    }

    function toggleTask(index){
        let tasks=JSON.parse(localStorage.getItem("tasks")) ||[]
        localStorage.setItem("tasks",JSON.stringify(tasks));
        renderTasks();
    }
    function deleteTask(index){
        let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        renderTasks();
    }

    function loadtasks(){
        renderTasks();
    }
 