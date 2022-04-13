const express = require('express');
const router = express.Router();
const Student = require('./model/student1')
const mongoose = require('mongoose')

router.get( '/', (req, res,next ) => {
    Student.find()
    .then(result => {
        res.status(200).json({
            studentData:result
        })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error:error
        })
    })
   
})
router.get('/:id',(req,res,next) =>{
    console.log(req.params.id);
    Student.findById(req.params.id)
    .then(result => {
        console.log(result);
        res.status(200).json({

            student: result
        })
    })
    .catch(error => {
        res.status(500).json({
            error:error
        })
    })
})
router.post('/',(req,res,next) => {
        const student = new Student({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        class:req.body.class,
        age:req.body.age
    })
    student.save()
    .then(result => {
        console.log(result);
        res.status(200).json({save:result})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error:err})
    })
})
router.delete('/:id',(req,res,next) => {
    Student.remove({_id:req.params.id})
    .then(result => {
        console.log(result);
        res.status(200).json({
            message:result
        })
    })
    .catch(error => {      
        res.status(500).json({
            message:error
        })
    })
})
router.put('/:id',(req,res,next) => {
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            class:req.body.class,
            age:req.body.age
        }
    })
    .then(result => {
        res.status(200).json({
            updated:result
        })
    })
    .catch(error => {
    console.log(error);
    res.status(500).json({
        error:error
    })
})
    })

module.exports = router;