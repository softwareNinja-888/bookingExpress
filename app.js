const express = require('express')
const app = express()
const mainRouter = require('./routes/index.js')

app.set('view engine','ejs')
app.use('/',mainRouter)

const PORT = process.env.PORT || 3000
app.listen(3000,()=>`Listening on port:${PORT}`)