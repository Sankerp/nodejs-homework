// First_node_project
// Alex
// xbAfu1TiVYrE7PLI

//BC-55
//sankerp
//DH3SCTM78TElUY6p
//mongodb+srv://sankerp:DH3SCTM78TElUY6p@cluster0.wvorkrg.mongodb.net/db-contacts?retryWrites=true&w=majority


const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

const contactsRouter = require('./routes/api/contacts')

dotenv.config()

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = `Server error: ${err.message}` } = err
  res.status(status).json({ message, })
})

module.exports = app