let currentSlide = 0
let totalSlides = $('.holder div').length


let moveslide = function(slide) {
    let leftPosition = (-slide * 100) + 'vw'
    $('.holder').css('left', leftPosition)
    let slideNumber = slide + 1
    $('.steps').text(slideNumber + '/' + totalSlides)
}

let nextSlide = function() {
    currentSlide += 1;

    if (currentSlide >= totalSlides) {
        currentSlide = 0
    }

    moveslide(currentSlide)

}

let previousSlide = function() {
    currentSlide -= 1

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1
    }
    moveslide(currentSlide)

}


let autoSlide = setInterval(function() {
    nextSlide()
}, 4000)

$('.next').on('click', function() {
    clearInterval(autoSlide) // Cancels autoSlide function
    nextSlide()
})

$('.prev').on('click', function() {
    clearInterval(autoSlide) // Cancels autoSlide function
    previousSlide()
})


let slideNumber = currentSlide + 1
$('.steps').text(slideNumber + '/' + totalSlides)


$('body').on('keydown', function(event) {
    let keyCode = event.keyCode

    if (keyCode == 37) {
        clearInterval(autoSlide)
        previousSlide()
    }

    if (keyCode == 39) {
        clearInterval(autoSlide)
        nextSlide()
    }

})
