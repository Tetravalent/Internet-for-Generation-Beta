const logo = document.querySelector('.logo');
const hoveringlogo = document.querySelector('.hovering')

logo.addEventListener('mouseover', () => {
    hoveringlogo.style.visibility = "visible"
})

hoveringlogo.addEventListener('mouseout', () => {
    hoveringlogo.style.visibility = 'hidden'
})

const bodyhtml = document.querySelector('.bodyhtml')
const absolute = document.querySelector('.absolute')
const section = document.querySelector('.content')

// absolute.addEventListener('click', () => {
//     section.classList.add('into');
//     bodyhtml.style.visibility = 'hidden';
// })


