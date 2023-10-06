const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber');

//Get All
router.get('/', async (req, res) => {

    try {

        const subscriber = await Subscriber.find()
        res.json(subscriber)
    } catch {
        res.status(500).json({ message: err.message })
    }

})
//Get One

router.get('/:id', (req, res) => {
    res.send(req.params.id)


})


router.post('/', async (req, res) => {

    const subscriber = new Subscriber({
        name : req.body.name,
        subscriberToChannel : req.body.subscriberToChannel,
        
    })

    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch{
        res.status(400).json({message : err.message})
    }

})



router.patch('/:id', (req, res) => {



})



router.delete('/:id', (req, res) => {



})
module.exports = router


