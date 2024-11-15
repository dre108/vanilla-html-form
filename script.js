const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
console.log("🚀 ~ registerForm:", registerForm)

// login selectors

const usernameLogin = document.getElementById("username")
const loginPassword = document.getElementById("loginPassword")
const submitButtonLogin =document.querySelector(".submit-button")
const errorUsernameLogin = document.getElementById("errorUsername")
const errorLoginPassword = document.getElementById("errorLoginPassword")
console.log("🚀 ~ loginForm:", loginForm)
console.log("loginPassword",loginPassword)


// register selectors

const registerName = document.getElementById("name")
const registerPassword = document.getElementById("password")
console.log("🚀 ~ password:", password)
const submitButtonRegister =document.querySelector(".submit-button")
const registerconfirmPassword = document.getElementById("confirmPassword")
const errorConfirmPassword = document.getElementById("errorConfirmPassword")
const errorPassword = document.getElementById("errorPassword")
const errorName = document.getElementById("errorName")



// Login Username Input event listener (event listener and display error is wrapped together)

loginForm.addEventListener("submit", (event)=> {
// Enter validation logic (create an array for each one of the fields)
let errorMessageUsername = [] 
if (
  usernameLogin.value.trim() == "" 
)
{
  errorMessageUsername.push("Enter username") 
  usernameLogin.classList.add("input-error")
    console.log("🚀 ~ loginForm.addEventListener ~ usernameLogin:", usernameLogin)

}
else {
  usernameLogin.classList.remove("input-error")

}
if (
  usernameLogin.value.trim().length < 3 || usernameLogin.value.trim().length > 15
){
  errorMessageUsername.push("Username must be between 3 and 15 characters");
  usernameLogin.classList.add("input-error")

}
else {
  usernameLogin.classList.remove("input-error")

}

// Display error message (Login UserName Input)

errorUsernameLogin.innerText= errorMessageUsername.join(", ")
if (
  errorMessageUsername.length > 0
) {
  event.preventDefault()
}
} );


loginButton.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });
  
  registerButton.addEventListener("click", () => {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  });
  
  loginButton.addEventListener("click", () => {
    loginButton.classList.add("selected");
    registerButton.classList.remove("selected");
  });
  
  registerButton.addEventListener("click", () => {
    registerButton.classList.add("selected");
    loginButton.classList.remove("selected");
  });

  loginForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(username.value)
    console.log(loginPassword.value)
  });

  registerForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(registerName.value)
    console.log(registerPassword.value)
  });

// Login Password Input Event Listener

loginForm.addEventListener("submit", (event)=>{
let errorMessageLoginPassword = []
if(
  loginPassword.value.trim() == ""
)
{
  errorMessageLoginPassword.push("Enter Password")
  loginPassword.classList.add("input-error")
}
else {
  loginPassword.classList.remove("input-error")
}
if(
  loginPassword.value.trim().length < 3 || loginPassword.value.trim().length > 15
){
  errorMessageLoginPassword.push("Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character.")
  loginPassword.classList.add("input-error")
}
else{
  loginPassword.classList.remove("input-error")
}

// Display Error Message (Login Password Input)

errorLoginPassword.innerText= errorMessageLoginPassword.join(", ")
if(
errorMessageLoginPassword.length < 0
){
event.preventDefault()
}

});


// Register Name Input event listener (event listener and display error is wrapped together)

registerForm.addEventListener("submit", (event)=> {
  // Enter validation logic (create an array for each one of the fields)
  let errorMessageName = [] 
  if (
    registerName.value.trim() == "" 
  )
  {
    errorMessageName.push("Enter username") 
    registerName.classList.add("input-error")
      console.log("🚀 ~ loginForm.addEventListener ~ usernameLogin:", usernameLogin)
  
  }
  else {
    registerName.classList.remove("input-error")
  
  }
  if (
    registerName.value.trim().length < 3 || registerName.value.trim().length > 15

  ){
    errorMessageName.push("Username must be between 3 and 15 characters");
    registerName.classList.add("input-error")
  
  }
  else {
    registerName.classList.remove("input-error")
  
  }  
  
  // Display error message (Register Name Input) 

errorName.innerText= errorMessageName.join(", ")
if (
  errorMessageName.length > 0 || errorPassword.length > 0 || errorMessageConfirm.length > 0
) {
  event.preventDefault()
};

});


  // Register Password Input Event Listener validations
  registerForm.addEventListener("submit", (event)=> {

  let errorMessagePassword = []
  if(
    registerPassword.value.trim() == ""
  )
  {
    errorMessagePassword.push("Enter Password")
      registerPassword.classList.add("input-error")
            console.log("🚀 ~ registerForm.addEventListener ~ registerPassword:", registerPassword)

  }
    else {
      registerPassword.classList.remove("input-error")
    }
    if (
      registerPassword.value.trim().length < 3 || registerPassword.value.trim().length >15 
    )
    {
      errorMessagePassword.push("Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character.")
      registerPassword.classList.add("input-error")
    }
    else{
      registerPassword.classList.remove("input-error")
    }

    // Display error message (Register Password Input)

    errorPassword.innerText= errorMessagePassword.join(", ")
    if (
      errorMessagePassword.length > 0
    ) {
      event.preventDefault()
    }
    
});



  // Register Confirm Password Input event listener (event listener and display error is wrapped together)

registerForm.addEventListener("submit", (event)=> {
  // Enter validation logic (create an array for each one of the fields)
  let errorMessageConfirm = [] 
  if (
    registerconfirmPassword.value.trim() == "" 
  )
  {
    errorMessageConfirm.push("Enter password") 
    registerconfirmPassword.classList.add("input-error")
      console.log("🚀 ~ registerForm.addEventListener ~ errorMessageConfirm:", errorMessageConfirm)

  }
  else {
    registerconfirmPassword.classList.remove("input-error")
  
  }
  if (
    registerconfirmPassword.value.trim().length < 3 || registerconfirmPassword.value.trim().length > 15
  ){
    errorMessageConfirm.push("Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character.");
    registerconfirmPassword.classList.add("input-error")
  
  }
  else {
    registerconfirmPassword.classList.remove("input-error")
  
  }
  
  // Display error message (Register Confirm Password)
  
  errorConfirmPassword.innerText= errorMessageConfirm.join(", ")
  if (
    errorMessageConfirm.length > 0
  ) {
    event.preventDefault()
  }
  } );

  // Send info to console log and actions to the buttons

loginButton.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });
  
  registerButton.addEventListener("click", () => {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  });
  
  loginButton.addEventListener("click", () => {
    loginButton.classList.add("selected");
    registerButton.classList.remove("selected");
  });
  
  registerButton.addEventListener("click", () => {
    registerButton.classList.add("selected");
    loginButton.classList.remove("selected");
  });

  loginForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(username.value)
    console.log(loginPassword.value)
  });

  registerForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(registerName.value)
    console.log(registerPassword.value)
    console.log(registerconfirmPassword.value)
  });

  
