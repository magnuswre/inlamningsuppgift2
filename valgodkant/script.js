const form = document.getElementById('validationForm') // Hämta hela formuläret
const btn = document.querySelector('.btn')
let forName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let repeatPassword = document.getElementById('repeatPassword')


let validationFeedback = document.querySelector('.validation-feedback')

const errorMessage = document.getElementById('errorMessage')

form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    valideraInput()
  
})

const isValidEmail = email => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
    return regEx.test(String(email).toLocaleLowerCase()); 
}

const checkNumber = onlyAlphabeth => {
 const noNumber = /[0-9]+/g
//  console.log(noNumber) 
return noNumber.test(String(onlyAlphabeth))
}

const valideraInput = () => {

    const fornameValue = forName.value.trim()
    const lastnameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const repeatPasswordValue = repeatPassword.value.trim()
    const checkbox = document.getElementById('terms')

     if(fornameValue.length < 2){
        form.classList.add('.d-none')  
        console.log("Förnamnet måste ha minst två bostäver")
        return 
    } 

    if(checkNumber(fornameValue)){
        console.log('Förnamn får ej innehålla siffror')
        return
    }
     
    if(lastnameValue.length < 2){
        console.log("Efternamnet måste ha minst två bostäver")
        return
    } 

    if(checkNumber(lastnameValue)){
        console.log('Efternamn får ej innehålla siffror')
        return
    }     

    if(!isValidEmail(emailValue)){
        console.log("email måste vara ett giltigt format")
        return
    }

    if(passwordValue.length < 6){
        console.log('lösenordet måste 6 ha minst tecken')
        return
    }

    // if(repeatPasswordValue === ""){
    //     console.log('Repetera lösenordet!')
    //     return
    // }

    if(passwordValue !== repeatPasswordValue){
        console.log('lösenordet matchar inte')
        return
        
    }

    if(!checkbox.checked){
        console.log("glöm inte att kryssa i rutan")
    }   


    const validationForm = {

        forName:forName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value,
} 

    console.log(validationForm)
    console.log(JSON.stringify(validationForm))
}


  



