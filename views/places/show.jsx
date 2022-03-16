const React = require('react')
const Def = require('../default')

function show (data) {
  // console.log(data)
  return (
    <Def>
      <main>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img className='fullwidth' src={`../${data.place.pic}`} alt={data.place.name} />
          </div>
          <div className='col-6'>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p className="text-center">Not Rated</p>
            <h2>Description</h2>
            <p className="text-center">Located in {data.place.city}, {data.place.state}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
          </div>
          <div className='col-1'>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">Delete</button>
            </form>
          </div>
          <div className='col-10'>
            <h2>Comments</h2>
            <p className="text-center">No comments yet!</p>
          </div>
        </div>
      </div>
      </main>
    </Def>
  )
}

module.exports = show
