import { mongoose } from "mongoose";

const connectToMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
    } catch(error){
        console.log("Error connecting for mongo", error.message);
    }
};

export default connectToMongoDB;