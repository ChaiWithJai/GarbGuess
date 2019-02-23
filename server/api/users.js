const router = require('express').Router()
const {User, Clothes, GarbGuess} = require('../db/models')
module.exports = router

router.post('/:userId/clothes', async (req, res, next) => {
  try {
    const addCloth = await Clothes.findOrCreate({
      where: {
        userId: req.params.userId,
        name: req.body.name
        // clothingType: req.body.clothingType,
        // color: req.body.color,
        // weight: req.body.weight,
        // bodyPart: req.body.bodyPart
      }
    })
    console.log('Cloth to add', addCloth[0])
    res.send(addCloth[0])
  } catch {
    next(err)
  }
})

router.post('/:userId/clothes/:clothId', async (req, res, next) => {
  try {
    const findCloth = await Clothes.findOne({
      where: {
        id: req.params.clothId,
        userId: req.params.userId
      }
    })
    const updatedCloth = await findCloth.update({
      name: req.params.name,
      clothingType: req.body.clothingType,
      color: req.body.color,
      weight: req.body.weight,
      bodyPart: req.body.bodyPart
    })
    res.send(updatedCloth)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/clothes', async (req, res, next) => {
  try {
    const getClothes = await Clothes.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.send(getClothes)
  } catch (err) {
    next(err)
  }
})
