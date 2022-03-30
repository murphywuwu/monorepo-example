import express from 'express'
import _ from 'lodash'
const app = express()
const port = 3001

import { QueryPayload } from 'simple-shared-data'

app.use((_req, res, next) => {
  // allow any website to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // continue to next middleware
  next()
})

app.get('/', (_req, res) => {
  const responseData: QueryPayload = {
    payload: _.snakeCase('Server data returned successfully'),
  }

  res.json(responseData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
