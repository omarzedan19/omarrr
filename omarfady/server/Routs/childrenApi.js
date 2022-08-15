const express = require('express')
const router = express.Router()
const Childrens = require('../models/Children')

router.post('/children', function (request, response) {
    // let newChild = new Childrens({
    //     "idNum": req.body.idNum,
    //     "name": req.body.name,
    //     "Fphone": req.body.Fphone,
    //     "MPhone": req.body.MPhone,
    //     "Fname": req.body.Fname,
    //     "Mname": req.body.Mname,
    //     "BD": req.body.birthdate,
    
    // })
    // await newChild.save()

    // newChild.find({}, function (err, newChild) {
    //     res.send(newChild)
    // })
    response.send("asscdsfve")

})

router.get('/children', function (req, res) {
    // Teacher.find({}, function (err, Children) {
    //     res.send(Children)
    // })
    res.send("dgbrbrbdcsrv")

})

//get child by id
// router.get('/Children', function (req, res) {

//     let filters = {}
//     if (req.query.idNum != undefined)
//         filters["idNum"] = req.query.idNum

//     if (req.query.name != undefined)
//         filters["name"] = req.query.name

//         Children.find(filters).exec(function (err, Child) {
//         res.send(Child)
//     })
// })

// router.delete('/Child/:id', function (req, res) {
//     let { id } = req.params
//     let result = {}
//     Childrens.deleteOne({ idNum: id })
//         .exec((err, success) => {
//             if (success === null) {
//                 result.code = 404
//                 result.message ="Not found"
//                 res.send(result)
//             } 
//             else {
//                 result.code = 200
//                 result.message ="Deleted successfuly"
//                 res.send(result)
//             }
//         })
// })



module.exports = router