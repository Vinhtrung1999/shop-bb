const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY !== 0){
        header.style.backgroundColor = `rgba(255, 255, 255, 1)`
    }
    else{
        header.style.backgroundColor = `rgba(255, 255, 255, 0)`
    }    
})