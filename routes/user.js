const express = require('express')
const router = express.Router()
const User = require('../models/user');
// const user = require('../models/subscriber');

//Get All
router.get('/', async (req, res) => {

    try {

        const user = await User.find()
        res.json(user)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }

})
//Get One

router.get('/:id', (req, res) => {
    res.send(req.params.id)


})


router.post('/', async (req, res) => {

    const user = new User({
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        emailNotification: req.body.emailNotification,
        smsNotification : req.body.smsNotification,
        userImage : req.body.userImage,
        isActive : req.body.userImage


    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    }  catch(err) {
        res.status(400).json({ message: err.message })
    }

})



router.post('/createAccount', async (req, res) => {

    const user = new User({
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        contactNumber: req.body.contactNumber,
        gender : req.body.gender,
        emailNotification: true,
        smsNotification : true,
        userImage : "testImage",
        isActive : true


    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    }  catch(err) {
        res.status(400).json({ message: err.message })
    }

})


router.patch('/:id', (req, res) => {



})



router.delete('/:id', (req, res) => {



})

// async function getSubscriber(req, res, next) {

//     try {
//         subscriber = await Subscriber.findById(req.params.id)

//         if (subscriber == null) {
//             return res.status(404).json({message : 'Cannot find subscriber'})
//         }

//     } catch (err) {

//     }

// }


module.exports = router


