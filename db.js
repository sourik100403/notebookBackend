const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017/enotebook";
// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("successful connect with mongo");
//     })
// }
// module.exports=connectToMongo;
const mongoURI=process.env.MONGODB_CONNECT_URL;
const connectToMongo= async ()=>{
    try{
        await mongoose.connect(mongoURI)
            console.log("successful connect with mongo");
    } catch(error){
        console.log("connection failed due to some error"+ error.message)
    }
}
module.exports=connectToMongo;