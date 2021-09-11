let form = document.querySelector("form");
let noticeBoard = document.querySelector(".notice-board");
form.addEventListener("submit",handleSubmit)
let arr = [];
let index = 0
function handleSubmit(event){
    event.preventDefault();
    let formObj = {};
    formObj.title = event.target.elements[1].value;
    formObj.catogary = event.target.elements[2].value
    // formObj.id = index++;
arr.push(formObj)
localStorage.setItem("notice-data",JSON.stringify(arr));
event.target.elements[1].value = ""
console.log(arr)
createBoard();
}
function createBoard(arr){
    let getNoticeData = JSON.parse(localStorage.getItem("notice-data"));
     console.log(getNoticeData);
    // console.log(arr)
    noticeBoard.innerHTML = "";
    getNoticeData.forEach((val,index)=>{
    let div = document.createElement("div");
    div.classList.add("notice-box");
    div.id = index;
    let h3 = document.createElement("h3");
    // h3.contentEditable = "true";
    h3.innerText = val.title;
    h3.style.textDecoration = "underline";
    h3.addEventListener("click",handleEdit)
    let p = document.createElement("p");
    // p.contentEditable = "true";
    p.innerText = val.catogary;
    p.addEventListener("click",handleEdit)
    
    div.append(h3,p);
    noticeBoard.append(div);
})


}
// function handleEditTitle(){

//}
function handleEdit(event){
    let editValue = event.target.innerText;
    let input = document.createElement("input");
    let label = document.createElement("label");
    label.innerHTML = "Edit-Value"
    label.style.marginRight = "2rem"
    input.value = editValue;
    input.innerText = editValue;
    event.srcElement.parentElement.append(label,input)
    if(event.target.localName == "h3"){
    input.addEventListener("keyup",handleTitle)
    }
    else input.addEventListener("keyup",handlePara)
}
function handleTitle(event){
    let getNoticeData = JSON.parse(localStorage.getItem("notice-data"));
    console.log(getNoticeData);
    let editId = event.srcElement.parentElement.id;
    
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        //event.srcElement.previousSibling.innerText= event.target.value;
        getNoticeData[editId].title = event.target.value;
        arr[editId].title = event.target.value
        localStorage.setItem("notice-data",JSON.stringify(getNoticeData));
        event.target.remove();
        createBoard();
}}
function handlePara(event){
    let getNoticeData = JSON.parse(localStorage.getItem("notice-data"));
    console.log(getNoticeData);
    let editId = event.srcElement.parentElement.id;
    
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        //event.srcElement.previousSibling.innerText= event.target.value;
        getNoticeData[editId].catogary = event.target.value;
        arr[editId].catogary = event.target.value
        localStorage.setItem("notice-data",JSON.stringify(getNoticeData));
        event.target.remove();
        createBoard();
}}