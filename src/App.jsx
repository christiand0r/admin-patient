import { useState,useEffect } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  const [patient, setPatient] = useState(null);
  const [patients, setPatients] = useState(() => {
    const savePatient = window.localStorage.getItem('apr')
    return savePatient ? JSON.parse(savePatient) : []
  });

  useEffect(() => {
    window.localStorage.setItem('apr', JSON.stringify(patients))
  }, [patients])
  

  const updatePatient = (patient) => {
    setPatients((patients) =>
      patients.map((p) => (p.id === patient.id ? patient : p))
    );
  };

  const deletePatient = (patientId) => {
    setPatients((patients) => patients.filter((p) => p.id !== patientId));
  };

  return (
    <div className="container mx-auto pt-20 px-4">
      <Header />

      <div className="grid items-start grid-cols-1 gap-8 mt-10 lg:grid-cols-7">
        <PatientForm
          patient={patient}
          setPatient={setPatient}
          setPatients={setPatients}
          updatePatient={updatePatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
