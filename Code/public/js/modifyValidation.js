window.addEventListener('load', function() {
    
    const modifyForm = document.querySelector('#modifyForm')
    const modifyInputName = document.querySelector('#modifyInputName')
    const modifyInputDescriptionS = document.querySelector('#modifyInputDescriptionS')
    const modifyInputDescriptionL = document.querySelector('#modifyInputDescriptionL')
    const modifyInputPrice = document.querySelector('#modifyInputPrice')
    const modifyInputDiscount = document.querySelector('#modifyInputDiscount')
    const modifyErrors = document.querySelector('#modifyErrors')
    
    modifyInputName.addEventListener('blur', function (){
        (modifyInputName.value == '' || modifyInputName.value.length < 5) ? modifyInputName.classList.add('is-invalid') : modifyInputName.classList.remove('is-invalid')
    })

    modifyInputDescriptionS.addEventListener('blur', function (){
        (modifyInputDescriptionS.value == '' || modifyInputDescriptionS.value.length < 5) ? modifyInputDescriptionS.classList.add('is-invalid') : modifyInputDescriptionS.classList.remove('is-invalid')
    })

    modifyInputDescriptionL.addEventListener('blur', function (){
        (modifyInputDescriptionL.value == '' || modifyInputDescriptionL.value.length < 20) ? modifyInputDescriptionL.classList.add('is-invalid') : modifyInputDescriptionS.classList.remove('is-invalid')
    })

    modifyInputPrice.addEventListener('blur', function (){
        (modifyInputPrice.value == '' || isNaN(modifyInputPrice.value)) ? modifyInputPrice.classList.add('is-invalid') : modifyInputPrice.classList.remove('is-invalid')
    })

    modifyInputDiscount.addEventListener('blur', function (){
        (modifyInputDiscount.value == '' || isNaN(modifyInputDiscount.value)) ? modifyInputDiscount.classList.add('is-invalid') : modifyInputDiscount.classList.remove('is-invalid')
    })

    modifyForm.addEventListener('submit', function(e){
        let errorsMsg = [];
        if(modifyInputName.value == '' || modifyInputName.value.length < 5) {
            errorsMsg.push('Nombre inválido')
            modifyInputName.classList.add('is-invalid')
        }
        if(modifyInputDescriptionS.value == '' || modifyInputDescriptionS.value.length < 5) {
            errorsMsg.push('Descripción breve inválida')
            modifyInputDescriptionS.classList.add('is-invalid')
        }
        if(modifyInputDescriptionL.value == '' || modifyInputDescriptionL.value.length < 20) {
            errorsMsg.push('Descripción detallada invalida')
            modifyInputDescriptionL.classList.add('is-invalid')
        }
        if(modifyInputPrice.value == '' || isNaN(modifyInputPrice.value)) {
            errorsMsg.push('Precio inválido')
            modifyInputPrice.classList.add('is-invalid')
        }
        if(modifyInputDiscount.value == '' || isNaN(modifyInputDiscount.value)) {
            errorsMsg.push('Descuento inválido')
            modifyInputDiscount.classList.add('is-invalid')
        }
        
        console.log(errorsMsg)
        if(errorsMsg.length >0) {
            modifyErrors.innerHTML = ''
            errorsMsg.map((msg)=>modifyErrors.innerHTML += `<li>${msg}</li>`)
            errorsMsg=[]
            e.preventDefault();
            return
        }
        else {
            modifyForm.submit()
        }
    }

    )
})
