const express = require('express')
const next = require('next')
const path = require('path')
const { parse } = require('url')
const pathMatch = require('path-match')
const compression = require('compression')

const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
server.use(compression());
const route = pathMatch()

app.prepare().then(() => {

  server.use('/_next', express.static(path.join(__dirname, '.next')));
  server.use('/sw.js', express.static(path.join(__dirname, '/resources/sw.js')));
  server.use('/manifest.json', express.static(path.join(__dirname, '/resources/manifest.json')));
  server.use('/favicon.ico', express.static(path.join(__dirname, '/resources/favicon.ico')));
  server.use('/icons', express.static(path.join(__dirname, '/resources/icons')));
  
  server.get('/dog/:breed', (req, res) => {
    const params = route('/dog/:breed')(parse(req.url).pathname)
    return app.render(req, res, '/dog/_breed', params);
  })

  server.get('/dog/breed/:path', (req, res) => {
    const params = route('/dog/breed/:path')(parse(req.url).pathname)
    console.log({params})
    return app.render(req, res, '/dog/_one-boy', params)
  })

  server.get('*', (req, res) => handle(req, res))

  if (process.env.NODE_ENV === 'local') {
    const port = 4375;

    server.listen(port, () => 
      console.log(`Server is listening on port http://localhost:${port}`)
    )

    console.log('app ready')
    }
  
})

module.exports = server;
