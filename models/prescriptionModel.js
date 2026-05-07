const db = require("../config/db");

const createPrescription = (

  doctorId,
  patientId,
  medicineName,
  dosage,
  instructions,
  callback

) => {

  const sql = `
    INSERT INTO prescriptions
    (
      doctor_id,
      patient_id,
      medicine_name,
      dosage,
      instructions
    )

    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(

    sql,

    [
      doctorId,
      patientId,
      medicineName,
      dosage,
      instructions
    ],

    callback
  );
};

const getDoctorPrescriptions = (
  doctorId,
  callback
) => {

  const sql = `
    SELECT * FROM prescriptions
    WHERE doctor_id = ?
  `;

  db.all(
    sql,
    [doctorId],
    callback
  );
};

const getPatientPrescriptions = (
  patientId,
  callback
) => {

  const sql = `
    SELECT * FROM prescriptions
    WHERE patient_id = ?
  `;

  db.all(
    sql,
    [patientId],
    callback
  );
};

const updatePrescription = (

  prescriptionId,
  medicineName,
  dosage,
  instructions,
  callback

) => {

  const sql = `
    UPDATE prescriptions

    SET
      medicine_name = ?,
      dosage = ?,
      instructions = ?

    WHERE id = ?
  `;

  db.run(

    sql,

    [
      medicineName,
      dosage,
      instructions,
      prescriptionId
    ],

    callback
  );
};

module.exports = {

  createPrescription,

  getDoctorPrescriptions,

  getPatientPrescriptions,

  updatePrescription,
};