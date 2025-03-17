
let form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let inp = document.querySelector("#task")

    let ul = document.querySelector("ul");

    let li = document.createElement("li");
    li.innerText = `${inp.value}`;
    let img = document.createElement("img");

    img.setAttribute('src', './img/close-circle-line.svg');
    img.setAttribute('class','deletBtn');
    img.setAttribute('alt', 'na');

    let btn = document.createElement("button");
    li.appendChild(btn);
    btn.appendChild(img);
    ul.appendChild(li);
    inp.value = "";
});


// let delBtns = document.querySelectorAll(".deletBtn");
// console.log(delBtns);
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",()=>{
//        console.log(delBtn);
//     })
// }


let ul = document.querySelector("ul");
ul.addEventListener("click",(evt)=>{
    console.log(evt.target);
    if(evt.target.nodeName == "IMG"){
        console.log(evt.target.parentElement.parentElement);
        let li = evt.target.parentElement.parentElement;
        li.remove();
    }
})