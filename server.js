const express = require('express')
var cookieParser = require('cookie-parser')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(cookieParser())

    server.get('/g/:slug', (req, res) => {
      app.render(req, res, '/', { slug: req.params.slug })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })

  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
