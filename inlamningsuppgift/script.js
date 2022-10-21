let form = document.getElementById('validationForm') 
let forName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let repeatPassword = document.getElementById('repeatPassword')

form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    valideraInput()
})

const isValidEmail = email => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
    return regEx.test(String(email).toLocaleLowerCase()); 
}

const checkNumber = onlyAlphabet => {
    const noNumber = /[0-9]+/g
    return noNumber.test(String(onlyAlphabet))
}

const checkError = document.querySelector('.d-none')

const setError = () => {
    checkError.classList.remove('d-none')
}

const setSuccess = () => {
    checkError.classList.add('d-none') 
}


const valideraInput = () => {

    const fornameValue = forName.value.trim()
    const lastnameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const repeatPasswordValue = repeatPassword.value.trim()
    const checkbox = document.getElementById('terms')
    
    if(fornameValue.length < 2 || checkNumber(fornameValue)){
        console.log("First Name måste ha minst två bostäver och inga siffror")
        setError()
        return
    } else {
        setSuccess()
    }

    if(lastnameValue.length < 2 || checkNumber(lastnameValue)){
        console.log("Last Name måste ha minst två bostäver och inga siffror")
        setError()
        return
    } else {
        setSuccess()
    }

    if(!isValidEmail(emailValue)){
        console.log("Email måste vara ett giltigt format")
        setError()
        return
    } else {
        setSuccess()
    }

    if(passwordValue.length < 6){
        console.log('Password måste 6 ha minst tecken')
        setError()
        return
    } else {
        setSuccess()
    }

    if(passwordValue !== repeatPasswordValue){
        console.log('Password matchar inte')
        setError()
        return
    } else {
        setSuccess()
    }

    if(!checkbox.checked){
        console.log("Accept terms and conditions")
        setError()
        return
    } else {
        setSuccess()
    }

    
    
    const validationForm = {

        forName:forName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value,

    } 
    
    console.log(`Grattis! Formuläret skickat med:
    Förnamn: ${validationForm.forName} 
    Efternamn: ${validationForm.lastName}
    Email: ${validationForm.email} 
    Password: ${validationForm.password}`)
    // console.log(JSON.stringify(validationForm))
    
}



//-------------SLUT------------------//

// if(checkNumber(fornameValue)){
    //     console.log('First Name får ej innehålla siffror')
    //     setError()
    //     return
    // } else {
    //     setSuccess()
    // }
  
// if(checkNumber(lastnameValue)){
    //     console.log('Last Name får ej innehålla siffror')
    //     setError()
    //     return
    // }  else {
    //     setSuccess()
    // }   