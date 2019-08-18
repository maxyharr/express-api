import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, big stuff')
})

app.get('/boogers', (req, res) => {
  res.send('These boogers are blue')
})

app.get('/somethingelse', (req, res) => {
  res.send({my: 'my', data: 'data'})
})

app.listen(port, () => console.log(`Example API listening on port ${port}`))