// console.log("Hello There!");

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); 

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    }
    else {
        let li = documment.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}