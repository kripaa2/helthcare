CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT CHECK(role IN ('doctor', 'patient')) NOT NULL
);

CREATE TABLE prescriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    doctor_id INTEGER NOT NULL,
    patient_id INTEGER NOT NULL,

    medicine_name TEXT NOT NULL,
    dosage TEXT NOT NULL,
    instructions TEXT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (doctor_id)
    REFERENCES users(id),

    FOREIGN KEY (patient_id)
    REFERENCES users(id)
);