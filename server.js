const express = require('express')
const chalk = require('chalk')
const mongoose = require('mongoose')
require('dotenv').config()
const methodOverride = require('method-override')
const createPath = require('./helpers/create-path')
const postRouter = require('./routes/post-routes')
const contactRouter = require('./routes/contact-routes')
const postApiRoutes = require('./routes/api-post-routes')

const errorMsg = chalk.bgKeyword('white').redBright
const successMsg = chalk.bgKeyword('green').white

const app = express()

app.set('view engine', 'ejs')

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)))

app.listen(process.env.PORT, 'localhost', (error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`))
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  const title = 'Home'
  res.render(createPath('index'), { title })
})

app.use(contactRouter)
app.use(postRouter)
app.use(postApiRoutes)

app.use((req, res) => {
  const title = 'Error'

  res.status(404).render(createPath('error'), { title })
})
