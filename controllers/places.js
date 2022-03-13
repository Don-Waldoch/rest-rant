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

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/show', (req, res) => {
  res.send('<h1>Show Page GET</h1>')
})

router.get('/edit', (req, res) => {
  res.send('<h1>Edit Page GET</h1>')
})

module.exports = router
