// declaracion de variables
const iconosMenu = document.getElementById('iconos-menu')
const header = document.getElementById('header')
const nav = document.getElementById('nav')
const enlace = document.querySelectorAll('.list-link')
const lista = document.querySelector('.list')




// funcion para le menu
const palanca = (e) => {
    nav.classList.toggle('active')
    header.classList.toggle('active')


}
iconosMenu.addEventListener('click', palanca)


// cerrar el menu
enlace.forEach(element => {
    element.addEventListener('click', (e) => {
        // lista.querySelector('.activo').classList.remove('activo')
        // element.classList.add('activo')

        // cambios al menu
        document.querySelector('.activo').classList.remove('activo')
        element.classList.add('activo')

        if (e.target.matches(`.${element.className}`)) {
            nav.classList.remove('active')
            header.classList.remove('active')
        }
    })

})





const headerScroll = () => {
    if (this.scrollY >= 30) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

window.addEventListener('scroll', headerScroll)

// evento


