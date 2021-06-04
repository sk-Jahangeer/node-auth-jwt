const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log("could not connect to database", error);
    }
};
