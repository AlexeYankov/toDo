let hiddenStyle = false;

function changeBasketStyle() {
    const basketList = document.getElementById("deletedTasksList");
    const basketIcon = document.getElementById("icon");
    const basketStyle = hiddenStyle ? "deletedTasksListHidden" : "deletedTasksList";
    
    // hiddenStyle = !hiddenStyle;
    // basketIcon.setAttribute("style", "cursor: pointer; padding: 0px 10px; color: red;");
    // basketList.setAttribute("class", basketStyle);

    // if (hiddenStyle) {
    //     basketIcon.setAttribute(
    //         "style",
    //         "cursor: pointer; padding: 0px 10px; color: blue; rotate: 180deg;"
    //     );
    // }
}

changeBasketStyle();
