function restoreTask(id, checkBoxID, btnID, container) {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    const selectDeleteList = document.getElementById("deletedTasksList");
    const selectContainer = document.getElementById(container);
    console.log(selectDeleteList);
    const selectedTask = document.getElementById(id);
    const btn = document.getElementById(btnID);
    const selectedCheckbox = document.getElementById(checkBoxID);
    selectedCheckbox.checked = false;
    selectedTask.setAttribute("class", "task");
    btn.remove();
    selectContainer.remove();
    const taskList = document.getElementById("input");
    document.body.insertBefore(selectedTask, taskList);

    let boxesidChecked = false;
    checkboxes.forEach((el) => {
        el.checked ? boxesidChecked = true : ""
    });
    if (!boxesidChecked) {
        // make delete button for tasks hidden
        const deleteButton = document.getElementById("delete");
        deleteButton.setAttribute("class", "deleteButtonHidden");
    }
    const select = document.getElementById("selectAll");
    select.checked = false;
}
