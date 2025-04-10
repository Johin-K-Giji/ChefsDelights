const mongoose = require("mongoose")

const connectDB = async ()=>{
try{
    await mongoose.connect("mongodb://localhost:27017/db_chefdelight");
    console.log("Database connected");
    
}catch(error){
console.error("Error while connecting to database" , error);
process.exit(1);
}

}

module.exports = connectDB;