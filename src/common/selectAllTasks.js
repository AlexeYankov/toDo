function selectAllTasks() {
    const deleteButton = document.getElementById("delete");
    //get major select
    const select = document.getElementById("selectAll");
    //get all major's sub checkboxes
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    //check major select value
    if (select.checked) {
        checkboxes.forEach((el) => {
            let currentParentElement = document.getElementById("div" + el.getAttribute("id"));
            currentParentElement ? currentParentElement.setAttribute("class", "checked") : "";
            el.checked = true;
        });
        // make delete button for tasks visible
        deleteButton.setAttribute("class", "deleteButton");
    } else {
        checkboxes.forEach((el) => {
            let currentParentElement = document.getElementById("div" + el.getAttribute("id"));
            currentParentElement ? currentParentElement.setAttribute("class", "task") : "";
            el.checked = false;
            // make delete button for tasks hidden
            deleteButton.setAttribute("class", "deleteButtonHidden");
        });
    }
}
