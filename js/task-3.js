const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


function handleBlur(event) {
    event.preventDefault();

    if (event.target.value === "") {
        nameOutput.textContent = "Anonymous";
        
    } else {
        nameOutput.textContent = event.target.value;        
    }
  
};

nameInput.addEventListener("blur", handleBlur)


