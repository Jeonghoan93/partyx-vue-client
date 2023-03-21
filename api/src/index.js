const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { eventRoutes, hostRoutes, userRoutes } = require("./api/routes");

const connectDB = require("./config/db");

dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/hosts", hostRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to PartyX API!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
