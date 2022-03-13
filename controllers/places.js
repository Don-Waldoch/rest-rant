const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
  res.render('places/index', {places})
})

// POSt route
router.post('/', (req, res) => {
  // console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
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
