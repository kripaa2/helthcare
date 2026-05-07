require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const db = require("./config/db");

const authRoutes =
  require("./routes/authRoutes");

const prescriptionRoutes =
  require("./routes/prescriptionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(
  "/api/prescriptions",
  prescriptionRoutes
);

const schema = fs.readFileSync(
  "./database/schema.sql",
  "utf8"
);

db.exec(schema, (err) => {

  if (err) {
    console.log(err.message);

  } else {

    console.log(
      "Database tables created"
    );
  }
});

app.get("/", (req, res) => {

  res.send(
    "HealthTech Prescription API Running"
  );
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});