window.addEventListener('load', function() {
    const liCategory1 = document.querySelector('#liCategory1');
    const liCategory2 = document.querySelector('#liCategory2');
    const liCategory3 = document.querySelector('#liCategory3');
    const liCategory4 = document.querySelector('#liCategory4');
    const liCategory5 = document.querySelector('#liCategory5');
    const liCategory6 = document.querySelector('#liCategory6');
    const liCategory7 = document.querySelector('#liCategory7');
    const liCategory8 = document.querySelector('#liCategory8');
    const liCategory9 = document.querySelector('#liCategory9');
    const liCategory10 = document.querySelector('#liCategory10');
    const liCategories = [liCategory1, liCategory2, liCategory3, liCategory4, liCategory5, liCategory6, liCategory7, liCategory8, liCategory9, liCategory10]


    let query = location.pathname;
    if(query==='/products/subcategory/1' && !liCategory1.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===0){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/2' && !liCategory2.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===1){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/3' && !liCategory3.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===2){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/4' && !liCategory4.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===3){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/5' && !liCategory5.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===4){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/6' && !liCategory6.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===5){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/7' && !liCategory7.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===6){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/8' && !liCategory8.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===7){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/9' && !liCategory9.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===8){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }
    else if(query==='/products/subcategory/10' && !liCategory10.classList.contains('link-warning')){
        for(let i=0; i<liCategories.length; i++){
            if(i===9){
                liCategories[i].classList.remove('link-white');
                liCategories[i].classList.add('text-warning')
            }else{
                liCategories[i].classList.remove('link-warning');
                liCategories[i].classList.add('text-white')
            }
        }
    }


})