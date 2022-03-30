const React = require('react')
const Def = require('../default')

function show (data) {
  console.log(data.id)
  let image = (data.place.pic.match(/^images/)) ? `../${data.place.pic}` : data.place.pic
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
      rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img className='fullwidth' src={image} alt={data.place.name} />
            <h3>Located in {data.place.city}, {data.place.state}</h3>
          </div>
          <div className='col-6'>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p className="text-center">{rating}</p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <div className='row'>
            <div className='col-4'></div>
            <div className='col-2'>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
              </div>
              <div className='col-2'>
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete</button>
              </form>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2>Comments</h2>
            {comments}
          </div>
          <p></p><hr></hr>
          <h2>Got Your Own Rant or Rave?</h2>
          <form method="POST" action={`/places/${data.id}/comment`}>
            <div className="mb-3 row">
              <div className="col-12">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea type="text" className="form-control" id="content" name="content" rows="2"/>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="author" className="form-label">Author</label>
                <input type="text" className="form-control" id="author" name="author"/>
              </div>
              <div className="col-md-5">
                <label htmlFor="stars" className="form-label">Star Rating</label>
                <select id="stars" name="stars" className="form-select">
                  <option selected>Choose...</option>
                  <option>0.5</option>
                  <option>1.0</option>
                  <option>1.5</option>
                  <option>2.0</option>
                  <option>2.5</option>
                  <option>3.0</option>
                  <option>3.5</option>
                  <option>4.0</option>
                  <option>4.5</option>
                  <option>5.0</option>
                </select>
              </div>
              <div className="col-md-1">
                <div className="form-group">
                  <label className="form-check-label" htmlFor="rant">Rant?</label>
                  <input className="form-check-input" type="checkbox" id="rant" name="rant"/>
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Add Comment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </main>
    </Def>
  )
}

module.exports = show
