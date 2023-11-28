function addElement (value) {
    const warnInput = document.getElementById("inputWarning");
    //select main element
    const mainInput = document.getElementById("input");
    //create task container
    const createTaskContainer = document.createElement("div");
    createTaskContainer.setAttribute("class", "task");
    const id = crypto.randomUUID();
    createTaskContainer.setAttribute("id", "div" + id);

    if (!value.trim()) {
        warnInput.setAttribute("class", "deletedTasksList")
        return
    }
    //set task name value to container
    const taskName = document.createTextNode(value.trim());
    createTaskContainer.appendChild(taskName);
    warnInput.setAttribute("class", "deletedTasksListHidden")

    //create checkbox for task
    const newCHeckbox = document.createElement("input");

    newCHeckbox.setAttribute("type", "checkbox");
    newCHeckbox.setAttribute("id", id);
    createTaskContainer.appendChild(newCHeckbox);

    // add the newly created element and its content into the DOM
    // document.body.insertBefore(createTaskContainer, mainInput);
    document.body.appendChild(createTaskContainer);
    //add listener of checked status
    newCHeckbox.onclick = () => completeTask(id);
}

function addTask() {
    const mainInput = document.getElementById("input");
    addElement(mainInput.value);
    mainInput.value = "";
}