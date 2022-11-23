import { json, urlencoded } from 'body-parser'
import mongoSanitize from 'express-mongo-sanitize'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { connect } from './utils/db'
import contactRouter from './resources/contact/contact.router'

import countries from './countries'

import * as http from 'http'

export const app = express()
dotenv.config()

app.use(express.static('public'))

app.use(helmet())

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use(mongoSanitize())
app.use(morgan('dev'))

app.get('/countries', async (req, res) => {
  res.status(200).send(countries)
})

app.use('/api/contacts', contactRouter)

export const start = async () => {
  try {
    await connect()

    const httpServer = http.createServer(app)
    httpServer.listen(7898, () => console.log(`REST API on 7898`))
  } catch (e) {
    console.error(e)
  }
}
