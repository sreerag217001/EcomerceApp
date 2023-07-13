const db=require('./db')

const allUsers=()=>{
    return db.User.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    Users:result
                }
            }else{
                return{
                    statusCode:404,
                    message:'No data available'
                }
            }
        }
    )
}

const addUser=(id,name,email,password)=>{
 return db.User.findOne({
    id,
  
 }).then((result)=>{
    if(result){
        return{
            statusCode:404,
            message:'User already registered'
        }
    }else{
        const newUser=new db.User({
            id,
           name,
           email,
           password
        })
        newUser.save()
        return{
            statusCode:200,
            message:'User successfully registered'
        }
    }
 })
}


      
      
   
   
   
   



module.exports={
    allUsers,
    addUser,
   
}

