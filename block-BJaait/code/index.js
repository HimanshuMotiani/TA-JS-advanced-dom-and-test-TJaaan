let icon = document.querySelector(".icon");
let list = document.querySelector(".list");
icon.addEventListener("click", handleInput);
let arr = [];
function handleInput(event) {
    let item = document.querySelector(".item");
    if (item.value) {
        arr.push(item.value);
        createUI(arr);
    }
    item.value = '';
}
let item;
function createUI(arr) {
    list.innerHTML = "";
    arr.forEach((element, index) => {
        let div = document.createElement("div");
        div.classList.add("boxes", "each-box");
        div.innerText = element;
        div.draggable = "true";
        div.addEventListener("dragstart",(event)=>{
            console.log("dragstart");
            item = event.target;
        });
        div.addEventListener("dragend",()=>{
            console.log("dragend");
        });
        div.addEventListener("dragleave",()=>{
            console.log("dragleave");
        });
        div.addEventListener("dragover",(event)=>{
           event.preventDefault();
            console.log("dragover");
        });
        div.addEventListener("drop",(event)=>{
            event.preventDefault();
           // event.target.insertAdjacentElement("afterbegin",item)
            list.insertBefore(item, event.target);
            console.log("drop");
        });
        
        div.addEventListener("dragenter",()=>{
            console.log("dragenter");
        });
        let span = document.createElement("span");
        span.classList.add("drag")
        span.innerText  = "Drag Me"
        div.append(span)
        list.append(div);
    });
}
