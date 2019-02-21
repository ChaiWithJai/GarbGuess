const User = require('./user')
const GarbGuess = require('./garbguess')
const Clothes = require('./clothes')

Clothes.belongsTo(User)
User.hasMany(Clothes)

Clothes.belongsToMany(GarbGuess, {through: 'wearable'})
GarbGuess.hasMany(Clothes)

module.exports = {
  User,
  GarbGuess,
  Clothes
}
