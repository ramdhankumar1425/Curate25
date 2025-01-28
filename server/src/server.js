require("dotenv").config();
const mongoose = require("mongoose");
const { app } = require("./app");

// connect db
// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("MongoDB connected successfully");
//     })
//     .catch((err) => {
//         console.log("Error connecting to MongoDB", err);
//     });

// start the server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on PORT: ${process.env.PORT || 5000}`);
});
