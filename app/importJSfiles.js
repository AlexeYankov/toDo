const files = [
  "./src/common/addElement.js",
  "./src/common/basket.js",
  "./src/common/completeTask.js",
  "./src/common/deleteTask.js",
  "./src/common/handleEnter.js",
  "./src/common/selectAllTasks.js",
];

function importFiles(files) {
  const selectAnchorJStag = document.getElementById("JSinject");
  files.map((el) => {
    const createJSfileConnect = document.createElement("script");
    createJSfileConnect.setAttribute("src", el);

    document.body.insertBefore(createJSfileConnect, selectAnchorJStag);
  });
}
importFiles(files);
