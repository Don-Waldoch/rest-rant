const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'images/max-griss-YpfRCe5lda0-unsplash.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'images/kisspng-coffee-cup-cat-cafe-kopi-luwak-coffee-cups-and-cat-decorations-5aa789619725c8.1235123015209291216191.png'
  }]
  res.render('places/index', {places})
})

module.exports = router
