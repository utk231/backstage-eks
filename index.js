const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
  res.send('CICD App V2! Changed')
})

app.get('/status', (req, res) => {
    res.send('ok')
  })

// app.use(
//   helmet.contentSecurityPolicy({
//       directives: {
//           'script-src-attr': null
//       }
//   })
// );



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})