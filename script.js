const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearButton = document.getElementById("clear-button");


function addTask(){
    if(inputBox.value === ''){
        alert("This is empty!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        clearButton.style.display = "block";
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        if (listContainer.children.length === 0) {
            clearButton.style.display = "none";
        }
    }
}, false);

clearButton.addEventListener("click", clearAll);

function clearAll() {
    listContainer.innerHTML = "";
    saveData();
    clearButton.style.display = "none";
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    if (listContainer.children.length === 0) {
        clearButton.style.display = "none";
    } else {
        clearButton.style.display = "block";
    }
}

showTask();