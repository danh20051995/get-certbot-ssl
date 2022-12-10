require('dotenv').config({
  override: true
})

const Package = require('./package')

const { PORT = 3003 } = process.env

module.exports = {
  apps: [
    {
      name: `${Package.name}:${PORT}`,
      script: 'npm',
      args: 'run serve'
    }
  ]
}
