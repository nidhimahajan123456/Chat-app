const mongoose = require('mongoose');

async function conntectDatabase(){
    try{
       
        await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            
        }).then(con => {
            console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
        }) 
    }catch (error){
        console.log(`MongoDB Database not connected with HOST`)
    }
   
} 
  


module.exports = conntectDatabase;