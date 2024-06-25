import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true); // prévient les erreurs de requête en activant les requêtes strictes
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!); // "!" signifie que la valeur ne peut pas être nulle
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}