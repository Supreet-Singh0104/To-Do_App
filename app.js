let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    if (inp.value.trim() !== "") { // Check if input is not empty
        let item = document.createElement("li");
        item.innerText = inp.value;

        let delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        delBtn.classList.add("delete");

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = ""; // Clear input field
    }
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement; // Get the parent <li> element
        listItem.remove();
        console.log("deleted");
    }
});
