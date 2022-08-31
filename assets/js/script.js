var slider = [
    {
        'heading': 'Los Angeles',
        'description': 'We had the best time playing at Venice Beach!',
        'url': './assets/imgs/la.jpg'
    },
    {
        'heading': 'New York',
        'description': 'The atmosphere in New York is lorem ipsum.',
        'url': './assets/imgs/ny.jpg'
    },
    {
        'heading': 'Chicago',
        'description': 'Thank you, Chicago - A night we won\'t forget.',
        'url': './assets/imgs/chicago.jpg'
    }
]

;(() => {
    var index = 1
    setInterval(() => {
        document.querySelector('#slider').style.backgroundImage = `url(${slider[index].url})`
        console.log(document.querySelector('#slider').style.backgroundImage);
        document.querySelector('#slider .text-heading').textContent = slider[index].heading
        document.querySelector('#slider .text-description').textContent = slider[index].description
        index++
        if (index > 2) index = 0
    }, 3000)
})()