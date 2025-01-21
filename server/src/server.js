require("dotenv").config();
const { app } = require("./app");
const express = require("express");

// connect db

// start server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on PORT: ${process.env.PORT || 5000}`);
});
