function completeTask(id) {
    const currentElement = document.getElementById(id);
    const deleteButton = document.getElementById("delete");
    const setCurrentElementStyle = document.getElementById("div" + id);

    if (currentElement.checked) {
        setCurrentElementStyle.setAttribute("class", "checked");
        deleteButton.setAttribute("class", "deleteButton");
    } else {
        setCurrentElementStyle.setAttribute("class", "task");
        let checkboxes = document.querySelectorAll("input[type=checkbox]");
        let boxesidChecked = false;
        checkboxes.forEach((el) => {
            console.log(el.checked)
            el.checked ? (boxesidChecked = true) : "";
        });
        if (!boxesidChecked) {
            deleteButton.setAttribute("class", "deleteButtonHidden");
        }
    }
}
