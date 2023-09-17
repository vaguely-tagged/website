const express = require('express')
const https = require("https")
const fs = require("fs")
const path = require("path");

const app = express()
const port = 3000
const rootDir = path.join(__dirname, "../public/html");

// const options = {
//   key: fs.readFileSync("./privkey.pem"),
//   cert: fs.readFileSync("./fullchain.pem")
// };

app.use(express.static('../public/static')) 

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, "landing", "landing.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https.createServer(options, app).listen(443);