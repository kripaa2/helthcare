const {

  createPrescription,

  getDoctorPrescriptions,

  getPatientPrescriptions,

  updatePrescription,

} = require(
  "../models/prescriptionModel"
);

const addPrescription = (
  req,
  res
) => {

  const {

    patientId,

    medicineName,

    dosage,

    instructions,

  } = req.body;

  createPrescription(

    req.user.id,

    patientId,

    medicineName,

    dosage,

    instructions,

    (err) => {

      if (err) {

        return res.status(500).json({
          message: err.message,
        });
      }

      res.status(201).json({
        message:
          "Prescription created",
      });
    }
  );
};

const doctorPrescriptions = (
  req,
  res
) => {

  getDoctorPrescriptions(

    req.user.id,

    (err, rows) => {

      if (err) {

        return res.status(500).json({
          message: err.message,
        });
      }

      res.json(rows);
    }
  );
};

const patientPrescriptions = (
  req,
  res
) => {

  getPatientPrescriptions(

    req.user.id,

    (err, rows) => {

      if (err) {

        return res.status(500).json({
          message: err.message,
        });
      }

      res.json(rows);
    }
  );
};

const editPrescription = (
  req,
  res
) => {

  const { id } = req.params;

  const {

    medicineName,

    dosage,

    instructions,

  } = req.body;

  updatePrescription(

    id,

    medicineName,

    dosage,

    instructions,

    (err) => {

      if (err) {

        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message:
          "Prescription updated",
      });
    }
  );
};

module.exports = {

  addPrescription,

  doctorPrescriptions,

  patientPrescriptions,

  editPrescription,
};