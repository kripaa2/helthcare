const express = require("express");

const verifyToken =
  require("../middleware/authMiddleware");

const checkDoctor =
  require("../middleware/roleMiddleware");

const {

  addPrescription,

  doctorPrescriptions,

  patientPrescriptions,

  editPrescription,

} = require(
  "../controllers/prescriptionController"
);

const router = express.Router();

router.post(
  "/",
  verifyToken,
  checkDoctor,
  addPrescription
);

router.put(
  "/:id",
  verifyToken,
  checkDoctor,
  editPrescription
);

router.get(
  "/doctor",
  verifyToken,
  checkDoctor,
  doctorPrescriptions
);

router.get(
  "/patient",
  verifyToken,
  patientPrescriptions
);

module.exports = router;