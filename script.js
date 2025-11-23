document.getElementById('form-validate').addEventListener('submit', (event)=>{
        event.preventDefault();

        let userName = document.getElementById('userName').value.trim()
        let email = document.getElementById('email').value.trim()
        let password = document.getElementById('password').value.trim()
        let confirmPassword = document.getElementById('confirmPassword').value.trim()

        let uNameError = document.getElementById('uName-error')
        let emailError = document.getElementById('mail-error')
        let passError = document.getElementById('pass-error')
        let cPassError = document.getElementById('cPass-error')
        
        let isValid = true;

        let uNamePattern = /^[A-Za-z0-9]+ [A-Za-z0-9]+$/;
        let emailPattern = /^[a-z0-9]+@+[a-z]{4,}\.[a-z]{2,}$/

        if(userName === ""){
            uNameError.innerText = "*Name is required"
            isValid = false
        } else if(!uNamePattern.test(userName)){
            uNameError.innerText = "*Enter your Full name"
            isValid = false
        } else if(!uNamePattern.test(userName)){
            uNameError.innerText = ""
            isValid = true
        }

        if(email === ""){ 
            emailError.innerText = "*Email is required" 
            isValid = false
        } else if(!emailPattern.test(email)){
            emailError.innerText = "*Enter your valid email"
            isValid = false
        } else if(!emailPattern.test(email)){
            emailError.innerText = ""
            isValid = true
        }

        if(password === ""){ 
            passError.innerText = "*Password is required" 
            isValid = false
        } else if(passError.length <= 3 || passError.length >= 10){
            passError.innerText = "Enter a password Char between 3 to 10"
            isValid = false
        } else if(passError.length >= 3 || passError.length <= 10){
            passError.innerText = ""
            isValid = true
        }

        if(confirmPassword === ""){ 
            cPassError.innerText = "*Confirm Password is required" 
            isValid = false
        } else if(confirmPassword !== password) {
            cPassError.innerHTML = "*Password Not Match"
            isValid = false
        } else if(confirmPassword !== password) {
            cPassError.innerHTML = ""
            isValid = true
        }

        if(isValid){
            alert(`Hi ${userName}, Welcome to our website!`);
            console.log(userName, email, password);
        }
})