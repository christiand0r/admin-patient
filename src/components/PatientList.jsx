import PatientCard from "./PatientCard";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="col-span-1 lg:col-span-4">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="font-black text-3xl">Listado Pacientes</h2>
        <p className="text-base">
          Añade pacientes y{" "}
          <span className="font-bold text-cyan-500">administralos</span>
        </p>
      </div>

      {!patients.length ? (
        <div className="flex flex-col items-center justify-center h-[620px]">
          <h3 className="text-center">No se han registrado pacientes</h3>
        </div>
      ) : (
        <ul className="mt-10 space-y-6 overflow-y-auto h-[620px]">
          {patients.map((patient) => (
            <li key={patient.id}>
              <PatientCard
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default PatientList;
