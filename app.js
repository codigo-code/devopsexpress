const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ip', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let ip2 = req.connection.remoteAddress.split(`:`).pop();
    res.send(ip + '<---ip ---- ip--->' + ip2);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})