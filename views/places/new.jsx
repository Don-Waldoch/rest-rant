const React = require('react')
const Def = require('../default')

function new_form (data) {
  //console.log(data)
  let Name     = ""
  let Pic      = ""
  let City     = ""
  let State    = ""
  let Cuisines = ""
  let Founded  = new Date().getFullYear()

  let message = ''               
  if (data.message) {
    message = (
      <h4 className="alert-danger">
        {data.message}
      </h4>
    )
    Name     = data.body.name
    Pic      = data.body.pic
    City     = data.body.city
    State    = data.body.state
    Cuisines = data.body.cuisines
    Founded  = data.body.founded
  }
  return (
    <Def>
      <main>
        <div className="container">
        <h1>Add a New Place</h1>
        {message}               
        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" value={Name} required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" value={Pic} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" value={City} />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" value={State} />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input className="form-control" id="cuisines" name="cuisines" value={Cuisines} required />
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input 
              type="number" 
              className="form-control" 
              id="founded" 
              name="founded" 
              value={Founded}
            />
          </div>
          <br></br>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
        </div>
      </main>
    </Def>
  )
}

module.exports = new_form
