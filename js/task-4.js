const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
const user = {};

function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email === "" || password === "") {
        alert('All form fields must be filled in');        
    } else {
        user.email = email.trim();
        user.password = password.trim();
        console.log(user);
    }
    
    form.reset();
    
}
