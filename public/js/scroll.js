const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY !== 0){
        header.style.backgroundColor = `rgba(255, 255, 255, 1)`
        header.style.boxShadow = `5px 10px 15px 0px #00000010`
    }
    else{
        header.style.backgroundColor = `rgba(255, 255, 255, 0)`
        header.style.boxShadow = `none`
    }    
})