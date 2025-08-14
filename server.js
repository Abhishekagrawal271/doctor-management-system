require("dotenv").config(); 
console.log("ENV:", process.env.NODE_ENV, process.env.PORT, process.env.MONGO_URL);


const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// PORT
const port = process.env.PORT || 8080;

console.log("PORT =", process.env.PORT);
console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("MONGO_URL =", process.env.MONGO_URL);


// Server Start
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on port ${port}`.bgCyan.white
  );
});
