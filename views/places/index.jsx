const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6" key={index}>
        <h2>
          <a href={`/places/${index}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img className='halfwidth' src={place.pic} alt={place.name} />
        <p className="text-center">
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
