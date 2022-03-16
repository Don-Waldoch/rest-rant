const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main className="text-center">
        <h1>REST-Rant</h1>
        <div>
          <img className='halfwidth' src="images/ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="Pizza Pic" />
          <div>
            Photo by <a href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Torres</a> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
        </main>
    </Def>
  )
}

module.exports = home
