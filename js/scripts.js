

const language = document.querySelector('.language')
document.addEventListener('click' , function(e){
    language.classList.remove('lang-active')
    if(e.target.closest('.current-lang')){
        language.classList.add('lang-active')
    }
    

})

setTimeout(() => {
    
}, timeout);