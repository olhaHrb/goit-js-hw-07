const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");
    
    
function handleInput(event) {
    event.preventDefault();

    if (nameInput.length === 0) {
       console.log(111);
    } else {
        nameOutput.textContent = event.currentTarget.value;
        
    }
  
};

nameInput.addEventListener("input", handleInput)


