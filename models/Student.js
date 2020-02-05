const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
     },
    phone:{
        type:String
     },
    batch:{
        type:String
    },
    response:
    {
        competition_id:String,
        answers:
        {
            survey1:
            {
                q1:String,
                q2:String
            }
        },
        is_submitted:Boolean
    }
});

const Student = mongoose.model('student',StudentSchema);

module.exports = Student;