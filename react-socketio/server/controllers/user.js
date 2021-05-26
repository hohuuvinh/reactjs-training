const User = require('../models/User')
const Deck = require('../models/Deck')

// const Joi = require('@hapi/joi')
// const idSchema = Joi.object().keys({
//     userID: Joi.string().regex(/^[0-9a-fA-F]{24}/).required()
// })
const getAll = async (req, res, next) => {
    try {
        const users = await User.find({})
        return res.status(200).json({ users })
    } catch (error) {
        next(error)
    }
}

const getUserDecks = async (req, res, next) =>{
    const {userID} = req.params
    const user = await User.findById(userID).populate('decks')
    return res.status(200).json({decks:user.decks})
}
const newDeck = async (req, res, next) =>{
    const {userID} = req.params
    const newDeck  =  new Deck(req.body)
    const user = await User.findById(userID)
    newDeck.owner = user
    await newDeck.save()
    user.decks.push(newDeck._id)
    await user.save()
    res.status(201).json({deck:newDeck})
}
const newUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        return res.status(201).json({ user: newUser })
    } catch (error) {
        next(error)
    }

}

const getUser = async (req, res, next) => {
    // const validatorResult = idSchema.validate(req.params)
    // console.log('Validate result', validatorResult)
    // console.log('param: ',req.params)
    const {userID} = req.params
    const user =await User.findById(userID)
    // console.log('info: ', user)
    return res.status(200).json({user})
}

const replaceUser = async (req, res, next) => {
    const {userID} = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({success:true})
}
const updateUser = async (req, res, next) => {
    const {userID} = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({success:true})
}


// const getAll = (req, res, next) => {
//     //Callback way
//     User.find({},(err,users)=>{
//         if(err) next(err)
//         return res.status(200).json({users})
//     })

// }
// const newUser = (req, res, next) => {
//     console.log('req.body content', req.body)
//     const newUser = new User(req.body)
//     console.log('newUser', newUser)
//     newUser.save((err, user) => {
//         console.error('Error', err)
//         console.log('User saved ', user)
//         return res.status(201).json({ user })
//     })
// }


module.exports = {
    getAll,
    newUser,
    getUser,
    updateUser,
    replaceUser,
    getUserDecks,
    newDeck
}