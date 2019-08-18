const requestLogger = (req, res, next) => {
  if (req.body) console.log('req.body', req.body)
  if (req.params) console.log('req.params', req.params)
  if (req.query) console.log('req.query', req.query)
  console.log(`Received a ${req.method} request from ${req.ip} for ${req.url}`)
  next()
}

export default requestLogger