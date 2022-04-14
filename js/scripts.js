

const language = document.querySelector('.language')
document.addEventListener('click' , function(e){
    language.classList.remove('lang-active')
    if(e.target.closest('.current-lang')){
        language.classList.add('lang-active')
    }
    

})


const burger = document.querySelector('.burger-button'),
    header = document.querySelector('header')

burger.addEventListener('click' , function(e){
    header.classList.toggle('active')
}  )


if(window.innerWidth < 1300){
    new Swiper('.portfolio-sites',{


    }) 
    new Swiper('.swiper-team',{
        navigation:{
            nextEl:'.next-team',
            prevEl: '.prev-team'
        },


    }) 
    new Swiper('.our-business-swiper',{
        // navigation:{
        //     nextEl:'.next-team',
        //     prevEl: '.prev-team'
        // },


    }) 


}

