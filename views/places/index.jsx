const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6" key={place.id}>
        <h2>
          <a href={`/places/${place.id}`} >
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
        <p className="text-center">
          Founded in {place.founded}
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
