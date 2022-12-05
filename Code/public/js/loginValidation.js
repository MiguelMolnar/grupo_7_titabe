window.addEventListener('load', function() {

    const loginForm = document.querySelector('#loginForm')
    const loginInputEmail = document.querySelector('#loginInputEmail')
    const loginInputPassword = document.querySelector('#loginInputPassword')
    const loginErrors = document.querySelector('#loginErrors')
    
    loginInputEmail.addEventListener('blur', function (){
        (loginInputEmail.value == '' || !loginInputEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? loginInputEmail.classList.add('is-invalid') : loginInputEmail.classList.remove('is-invalid');
    })

    loginInputPassword.addEventListener('blur', function (){
        (loginInputPassword.value == '') ? loginInputPassword.classList.add('is-invalid') : loginInputPassword.classList.remove('is-invalid');
    })

    loginForm.addEventListener('submit', function(e){
        let errorsMsg = [];
        if(loginInputEmail.value == ''|| !loginInputEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            errorsMsg.push('Email inválido')
            loginInputEmail.classList.add('is-invalid')
        }
        if(loginInputPassword.value == '') {
            errorsMsg.push('Contraseña invalida')
            loginInputPassword.classList.add('is-invalid')
        }
        if(errorsMsg.length >0) {
            loginErrors.innerHTML = ''
            errorsMsg.map((msg)=>loginErrors.innerHTML += `<li>${msg}</li>`)
            errorsMsg=[]
            e.preventDefault();
            return
        }
        else {
            loginForm.submit()
        }
    }

    )
})

