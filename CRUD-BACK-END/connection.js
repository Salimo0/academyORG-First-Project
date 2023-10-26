const mongoose = require("mongoose");

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const uri = `mongodb+srv://SalimCH:SalimCH@cluster0.nu12cl7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`

const connexion = mongoose
    .connect(uri, connectionParams)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });

module.exports = connexion;

