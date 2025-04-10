const formContainer = document.querySelector(".container");
const inputEl = document.querySelector("form input");
const btnSubmit = document.querySelector(".subscribe_btn");
const successEl = document.querySelector(".ready");
const btnDismiss = document.querySelector (".dismiss")

  btnSubmit.addEventListener("click", () => {
    
      if(inputEl.value !== ""){
        formContainer.classList.add("hide");
        successEl.classList.remove("hide");
        document.querySelector(".error p").innerHTML = "";
      }else{
        document.querySelector(".error p").innerHTML = "Valid Email Required";
        inputEl.classList.add("active");
      }
  });

  btnDismiss.addEventListener("click", () => {
    formContainer.classList.remove("hide");
    successEl.classList.add("hide");
    inputEl.value = "";
    inputEl.classList.remove("active");
  });