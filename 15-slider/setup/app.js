const slides = document.querySelectorAll('.slide')
const nextButton = document.querySelector('.nextBtn')
const prevButton = document.querySelector('.prevBtn')

const EVENT = {
    CLICK: 'click',
    LOAD: 'DOMContentLoaded'
}

let posicion = 0

window.addEventListener(EVENT.LOAD, function() {
    checkButtons()
    goToPosition(posicion)
})

nextButton.addEventListener(EVENT.CLICK, function() {
    posicion++   
    checkButtons()
    goToPosition(posicion)
    })


prevButton.addEventListener(EVENT.CLICK, function() {
    posicion--
    checkButtons()
    goToPosition(posicion)
    })

function checkButtons () {
    if (posicion > slides.length - 2 ) {
        nextButton.style = "display: none"            
     } else {
           nextButton.style = "display: block"
        }
    if (posicion < 1) {
        prevButton.style = "display: none"            
     } else {
        prevButton.style = "display: block"
       }
} 

function goToPosition(position) {
    const translation = position * -100
    slides.forEach(function(slide) {
        slide.style = `transform: translateX(${translation}%);`
        })
    }
