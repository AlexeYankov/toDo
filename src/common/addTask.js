function addTask() {
    const mainInput = document.getElementById("input");
    addElement(mainInput.value);
    mainInput.value = "";
}