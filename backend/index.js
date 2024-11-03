const express = require('express')
const { pool } = require('./utils/pool')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    const data = await pool.query('SELECT * from transactions')
    console.log(data.rows)
    res.send(data.rows)
})

app.post('/add', (req, res) => {
    console.log("hit")
    console.log(req.body)
    res.send({status : "success"})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

