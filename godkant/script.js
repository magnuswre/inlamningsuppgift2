const form = document.getElementById('validationForm') // Hämta hela formuläret
const btn = document.querySelector('.btn')
const forName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repeatPassword = document.getElementById('repeatPassword')
const checkbox = document.getElementById('terms')
const inputs = document.querySelectorAll('.validation-form')

form.addEventListener('submit', (e)=>{
    e.preventDefault(); 

    if(forName.value === "" || lastName.value === "" || email.value == "" || password.value === "" || password.value !== repeatPassword.value){
     console.log("alla fält är inte ifyllda")
    return
   }
    
     
    const validationForm = {

            forName:forName.value,
            lastName:lastName.value,
            email:email.value,
            password:password.value,
            
        } 

        console.log(validationForm)



    })


