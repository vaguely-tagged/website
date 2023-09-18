const express = require('express')
const https = require("https")
const fs = require("fs")
const path = require("path");

const app = express()
const port = 3000
const rootDir = path.join(__dirname, "../public/html");

const options = {
  key: fs.readFileSync("./privkey.pem"),
  cert: fs.readFileSync("./fullchain.pem")
};

app.use(express.static('../public/static')) 

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, "landing", "landing.html"))
})

app.get('/blog', (req, res) => {
  res.sendFile(path.join(rootDir, "blog", "blog.html"))
})

app.get('/resume', (req, res) => {
  res.sendFile(path.join(rootDir, "resume", "resume.html"))
})

app.get('/sep17', (req, res) => {
  res.sendFile(path.join(path.join(rootDir, "articles"), "sep17", "sep17.html"))
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


https.createServer(options, app).listen(443);