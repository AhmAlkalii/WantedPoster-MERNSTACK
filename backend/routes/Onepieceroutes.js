const express = require('express')
const {getCharacters,createCharacter,removeCharacter, updateCharacter} = require('../controller/Onepiececontroller')

const router = express.Router()


router.get('/')

router.get('/', getCharacters)

router.post('/', createCharacter)

router.delete('/:id', removeCharacter)

router.patch('/:id', updateCharacter)

module.exports = router