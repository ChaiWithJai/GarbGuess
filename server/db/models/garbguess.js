const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios')

const GarbGuess = db.define('garbguess', {
  weather: {
    type: Sequelize.ENUM,
    values: ['hot', 'humid', 'windy', 'dry', 'freezing', 'chilly', 'cold']
  },
  occassion: {
    type: Sequelize.ENUM,
    values: ['date', 'party', 'hang with friends', 'lounge', 'job interview']
  }
})

module.exports = GarbGuess
