const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/user')

const User=mongoose.model('User',{
     id:String,
     name:String,
     email:String,
     password:Number
})



module.exports={
    User,
}

