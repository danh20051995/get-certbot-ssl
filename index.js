/**
* File name: index.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-19 04:04:57
*/
'use strict'
const express = require('express')
const app = express()
const os = require('os')

app.get('*', (req, res) => {
  let response = {}
  for (let index = 0; index < 5; index++) {
    response[Math.random()] = 'Random number: ' + Math.random()
  }

  return res.send(response)
})

app.listen(3003, '0.0.0.0', () => console.log('App listening at http://%s:%s', os.hostname(), 3003))

