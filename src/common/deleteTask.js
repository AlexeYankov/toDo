function deleteTask() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((el) => {
        if (el.getAttribute("id") === "selectAll") {
            return;
        }
        if (el.checked) {
            setCurrentTaskToDeletedList(el);
        }
        return;
    });
}

function setCurrentTaskToDeletedList(el) {
    const selectDeleteList = document.getElementById("deletedTasksList");
    const parentElementID = getParentElemet(el);
    const selectParentElement = document.getElementById(`${parentElementID}`);
    const createDeleteTaskContainer = document.createElement("div");
    const containerID = "deleted" + el.getAttribute("id");
    createDeleteTaskContainer.setAttribute("class", "deletedTasks");
    createDeleteTaskContainer.setAttribute("id", containerID);
    selectDeleteList.appendChild(createDeleteTaskContainer);
    createDeleteTaskContainer.appendChild(selectParentElement);

    const createRestoreBtn = document.createElement("button");
    const btnID = parentElementID + "id";
    createRestoreBtn.setAttribute("id", btnID);
    createRestoreBtn.onclick = () =>
        restoreTask(parentElementID, el.getAttribute("id"), btnID, containerID);
    createDeleteTaskContainer.appendChild(createRestoreBtn);

    let currentButtonElement = document.getElementById(btnID);
    currentButtonElement.innerHTML = "restore";
}

const getParentElemet = (el) => "div" + el.getAttribute("id");
