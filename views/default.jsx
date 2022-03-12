const React = require('react')

function Def (html) {
  return (
    <html>
      <head>
        <title>DW REST-Rant</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="/css/style.css"/>
      </head>
      <body>
        {html.children}
      </body>
    </html>
  )
}

module.exports = Def
