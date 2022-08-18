let number = document.querySelector("#number").value;
let Balance = document.querySelector("#Balance").value;
let submitBtn = document.getElementById("submit");
let form = document.querySelector("#form");

submitBtn.addEventListener("click", formNone);


function formNone(e){
    let form = document.getElementById("form");
    form.style.display = "none";
    let paymentImage = document.getElementById("image");
    paymentImage.style.display = "block";

    
    e.preventDefault();
}



































