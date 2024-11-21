const form = document.getElementById("form");
const email = document.getElementById("email");
const submited = document.querySelector(".ready");
const submit = document.getElementById("send");
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;  

  form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputEmail();
  emailValidate();
  })

  function subscribe(){
      submited.classList.toggle("submit")
  }

  document.getElementById("close").onclick = function(){
    document.querySelector(".ready").classList.remove("submit");
  }

  function errorInput(input){
    const formItem = input.parentElement;
    formItem.querySelector("span")

    formItem.className = "email error" 
  }

  function validateEmail(email){
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email);
}


function checkInputEmail(){
  const emailValue = email.value;
  if(emailValue=== ""){
    errorInput(email)
  }
  else {
    
    ; 
    
  }
}
 
