const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios')

const Clothes = db.define('clothes', {
  clothingType: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.ENUM,
    values: ['light', 'medium', 'heavy']
  },
  bodyPart: {
    type: Sequelize.ENUM,
    values: ['head', 'body', 'legs', 'feet']
  }
})

module.exports = Clothes
