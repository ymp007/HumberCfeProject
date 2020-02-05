const express = require('express');
let Student = require('../../models/Student');
const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const studentDB = await Student.find();
        res.send(studentDB);
    }catch(err){
        res.status(500).send('server error');
    }
});
module.exports = router;