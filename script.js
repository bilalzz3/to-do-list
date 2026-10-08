let inputbox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value.trim() === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.textContent = inputbox.value.trim();
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputbox.value = "";
}

// زرار Enter يضيف المهمة
inputbox.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

listcontainer.onclick = function(event){
    // الحاجة اللي اتضغط عليها
    let clicked = event.target;

    // لو ضغطت على المهمة: اشطبها أو شيل الشطب
    if(clicked.tagName === "LI"){
        clicked.classList.toggle("checked");
        saveData();
    }

    // لو ضغطت على ×: امسح المهمة كلها
    if(clicked.tagName === "SPAN"){
        let task = clicked.parentElement;
        task.remove();
        saveData();
    }
};

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();