const theModel = require('../models/Onepiecemodel')
const mongoose = require('mongoose')

//get all
const getCharacters = async(req, res) => {
    const merry = await theModel.find({}).sort({createdAt : -1})

    res.status(200).json(merry)
}

//create
const createCharacter = async(req,res) => {
    const { name, devilfruit, image, bounty, rating} = req.body

    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!devilfruit) {
        emptyFields.push('devilfruit')
    }
    if (!image) {
        emptyFields.push('image')
    }
    if (!bounty) {
        emptyFields.push('bounty')
    }
    if (!rating) {
        emptyFields.push('rating')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    
    try{
        const merry = await theModel.create({ name, devilfruit, image, bounty, rating})
        res.status(200).json(merry)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete
const removeCharacter = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such character'})
    }
  
    const merry = await theModel.findOneAndDelete({_id: id})
  
    if(!merry) {
      return res.status(400).json({error: 'No such character'})
    }
  
    res.status(200).json(merry)
}



//update
const updateCharacter = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such character'})
    }
    
    const merry = await theModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if(!merry) {
        return res.status(400).json({error: 'No such character'})
    }
    
    res.status(200).json(merry)
}


module.exports = {
    getCharacters,
    createCharacter,
    removeCharacter,
    updateCharacter
}