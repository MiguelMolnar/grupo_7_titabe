window.addEventListener('load', function () {

    const createForm = document.querySelector('#createForm')
    const createInputName = document.querySelector('#createInputName')
    const createInputDescriptionS = document.querySelector('#createInputDescriptionS')
    const createInputDescriptionL = document.querySelector('#createInputDescriptionL')
    const createInputPrice = document.querySelector('#createInputPrice')
    const createInputDiscount = document.querySelector('#createInputDiscount')
    const createErrors = document.querySelector('#createErrors')

    createInputName.addEventListener('blur', function () {
        (createInputName.value == '' || createInputName.value.length < 5) ? createInputName.classList.add('is-invalid') : createInputName.classList.remove('is-invalid')
    })

    createInputDescriptionS.addEventListener('blur', function () {
        (createInputDescriptionS.value == '' || createInputDescriptionS.value.length < 5) ? createInputDescriptionS.classList.add('is-invalid') : createInputDescriptionS.classList.remove('is-invalid')
    })

    createInputDescriptionL.addEventListener('blur', function () {
        (createInputDescriptionL.value == '' || createInputDescriptionL.value.length < 20) ? createInputDescriptionL.classList.add('is-invalid') : createInputDescriptionS.classList.remove('is-invalid')
    })

    createInputPrice.addEventListener('blur', function () {
        (createInputPrice.value == '' || isNaN(createInputPrice.value)) ? createInputPrice.classList.add('is-invalid') : createInputPrice.classList.remove('is-invalid')
    })

    createInputDiscount.addEventListener('blur', function () {
        (createInputDiscount.value == '' || isNaN(createInputDiscount.value)) ? createInputDiscount.classList.add('is-invalid') : createInputDiscount.classList.remove('is-invalid')
    })

    createForm.addEventListener('submit', function (e) {
        let errorsMsg = [];
        if (createInputName.value == '' || createInputName.value.length < 5) {
            errorsMsg.push('Nombre inválido')
            createInputName.classList.add('is-invalid')
        }
        if (createInputDescriptionS.value == '' || createInputDescriptionS.value.length < 5) {
            errorsMsg.push('Descripción breve inválida')
            createInputDescriptionS.classList.add('is-invalid')
        }
        if (createInputDescriptionL.value == '' || createInputDescriptionL.value.length < 20) {
            errorsMsg.push('Descripción detallada invalida')
            createInputDescriptionL.classList.add('is-invalid')
        }
        if (createInputPrice.value == '' || isNaN(createInputPrice.value)) {
            errorsMsg.push('Precio inválido')
            createInputPrice.classList.add('is-invalid')
        }
        if (createInputDiscount.value == '' || isNaN(createInputDiscount.value)) {
            errorsMsg.push('Descuento inválido')
            createInputDiscount.classList.add('is-invalid')
        }

        console.log(errorsMsg)
        if (errorsMsg.length > 0) {
            createErrors.innerHTML = ''
            errorsMsg.map((msg) => createErrors.innerHTML += `<li>${msg}</li>`)
            errorsMsg = []
            e.preventDefault();
            return
        }
        else {
            createForm.submit()
        }
    }

    )
})
