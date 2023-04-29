const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')

const createPath = page => path.join(__dirname, 'view', `${page}.html`)

const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, err => {
    err ? console.log('Something going wrong...') : console.log(`Server started with PORT:${PORT}`)
})

app.use(express.static('styles'))
app.use(express.static('image'))

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

app.use((req, res) => {
    console.log('Error...')
    res
    .status(404)
    .end('Error')
})