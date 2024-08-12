require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const assignmentRoutes = require('./routes/assignmentRoutes')

const app = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use('/api/auth', authRoutes)
app.use('/api', assignmentRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})