let taskcounter: number = 0;
window.addEventListener("load", function (): void {
    document.querySelector(".addButton").addEventListener("click", AddTaskText);
    document.querySelector(".total").addEventListener("click", AddTaskText);
});

function AddTaskText(): void {
    let newtask: any = document.querySelector(".newTask").value;
    console.log(newtask);
    addTaskToList(newtask);
    
    let element: Element = document.querySelector(".frame");
    let numberofChildren: number = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".total").innerHTML = numberofChildren + " in total";
}
function addTaskToList(newTaskValue: any): void {
    let addElement: HTMLDivElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    let myHtmlTemplate: string = "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".frame").appendChild(addElement);
    console.log("addTasktoList:" + newTaskValue);
}
function DeleteTaskText(clickedTrash: any): void {
    console.log("This is deleating the task");
    clickedTrash.parentElement.remove();
    taskcounter--;
    let element: Element = document.querySelector(".frame");
    let numberofChildren: number = element.children.length;
    document.querySelector(".total").innerHTML = numberofChildren + " in total";
}
function CheckedButton(clickedButton: any): void {
    if (clickedButton.classList.contains("fa-circle")) {
        clickedButton.classList.remove("fa-circle");
        clickedButton.classList.add("fa-check-circle");
    }
    else {
        clickedButton.classList.remove("fa-check-circle");
        clickedButton.classList.add("fa-circle");
    }
}