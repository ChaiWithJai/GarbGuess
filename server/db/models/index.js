const User = require('./user')
const GarbGuess = require('./garbguess')
const Clothes = require('./clothes')

Clothes.belongsTo(User)
User.hasMany(Clothes)

Clothes.hasMany(GarbGuess)
GarbGuess.hasMany(Clothes)

module.exports = {
  User,
  GarbGuess,
  Clothes
}
