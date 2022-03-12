const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6" key={place.name}>
        <h2>{place.name}</h2>
        <p className="text-start">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-start">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
      <main>
        <div className="container">
        <h1 className="text-start">Places to Rant or Rave About</h1>
        <div className="row">
          {placesFormatted}
        </div>
        </div>
      </main>
    </Def>
  )
}
  
module.exports = index
