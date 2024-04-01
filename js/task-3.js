const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


function handleInput(event) {
    event.preventDefault();

    if (event.target.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
        
    } else {
        nameOutput.textContent = event.target.value;        
    }
  
};

nameInput.addEventListener("input", handleInput);


