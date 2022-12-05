window.addEventListener('load', function() {
    
    const registerForm = document.querySelector('#registerForm')
    const registerInputName = document.querySelector('#registerInputName')
    const registerInputEmail = document.querySelector('#registerInputEmail')
    const registerInputPhone = document.querySelector('#registerInputPhone')
    const registerInputAddress = document.querySelector('#registerInputAddress')
    const registerInputPassword = document.querySelector('#registerInputPassword')
    const registerInputPassword2 = document.querySelector('#registerInputPassword2')
    const registerErrors = document.querySelector('#registerErrors')
    
    registerInputName.addEventListener('blur', function (){
        (registerInputName.value == '' || registerInputName.value.length < 2) ? registerInputName.classList.add('is-invalid') : registerInputName.classList.remove('is-invalid')
    })

    registerInputEmail.addEventListener('blur', function (){
        (registerInputEmail.value == '' || !registerInputEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? registerInputEmail.classList.add('is-invalid') : registerInputName.classList.remove('is-invalid')
    })

    registerInputPhone.addEventListener('blur', function (){
        (registerInputPhone.value == '' || isNaN(registerInputPhone.value)) ? registerInputPhone.classList.add('is-invalid') : registerInputPhone.classList.remove('is-invalid')
    })

    registerInputAddress.addEventListener('blur', function (){
        (registerInputAddress.value == '' || registerInputAddress.value.length < 2) ? registerInputAddress.classList.add('is-invalid') : registerInputAddress.classList.remove('is-invalid')
    })

    registerInputPassword.addEventListener('blur', function (){
        (registerInputPassword.value == '' || !registerInputPassword.value.match(/(?=.*[a-z])((?=.*[A-Z])|(?=.*\d)).{8,}/)) ? registerInputPassword.classList.add('is-invalid') : registerInputPassword.classList.remove('is-invalid')
    })

    registerInputPassword2.addEventListener('blur', function (){
        (registerInputPassword2.value == '' || !(registerInputPassword2.value === registerInputPassword.value)) ? registerInputPassword2.classList.add('is-invalid') : registerInputPassword2.classList.remove('is-invalid')
    })

    registerForm.addEventListener('submit', function(e){
        let errorsMsg = [];
        if(registerInputName.value == '' || registerInputName.value.length < 2) {
            errorsMsg.push('Nombre inválido')
            registerInputName.classList.add('is-invalid')
        }
        if(registerInputEmail.value == '' || !loginInputEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            errorsMsg.push('Email inválido')
            registerInputEmail.classList.add('is-invalid')
        }
        if(registerInputPhone.value == '' || isNaN(registerInputPhone.value)) {
            errorsMsg.push('Teléfono inválido')
            registerInputPhone.classList.add('is-invalid')
        }
        if(registerInputAddress.value == '' || registerInputAddress.value.length < 2) {
            errorsMsg.push('Dirección inválida')
            registerInputAddress.classList.add('is-invalid')
        }
        if(registerInputPassword.value == '' || !registerInputPassword.value.match(/(?=.*[a-z])((?=.*[A-Z])|(?=.*\d)).{8,}/)) {
            errorsMsg.push('Constraseña inválida')
            registerInputPassword.classList.add('is-invalid')
        }
        if(registerInputPassword2.value == '' || !registerInputPassword2.value === registerInputPassword.value) {
            errorsMsg.push('Las contraseñas no coinciden')
            registerInputPassword2.classList.add('is-invalid')
        }
        console.log(errorsMsg)
        if(errorsMsg.length >0) {
            registerErrors.innerHTML = ''
            errorsMsg.map((msg)=>registerErrors.innerHTML += `<li>${msg}</li>`)
            errorsMsg=[]
            e.preventDefault();
            return
        }
        else {
            registerForm.submit()
        }
    }

    )
})
