const PatientCard = ({ patient, setPatient, deletePatient }) => {
  return (
    <div className="flex flex-col gap-4 p-10 rounded-lg shadow-sm bg-white">
      <header className="flex flex-col gap-y-2 sm:flex-row sm:items-start sm:justify-between">
        <p className="font-bold uppercase text-gray-600">
          Nombre:{" "}
          <span className="font-normal normal-case text-black">Hook</span>
        </p>

        <div className="flex flex-col gap-2 2xl:flex-row">
          <p className="font-bold uppercase text-gray-600">
            Propietario:{" "}
            <span className="font-normal normal-case text-black">
              {patient.ownername}
            </span>
          </p>
          <p className="font-bold uppercase text-gray-600">
            Correo:{" "}
            <a
              href="mailto:correo@correo.com"
              className="font-normal normal-case transition-colors text-cyan-500 hover:text-cyan-600"
            >
              {patient.ownermail}
            </a>
          </p>
        </div>
      </header>

      <p>{patient.petsymptoms}</p>

      <div className="flex items-center justify-between">
        <time
          dateTime={patient.dischargedate}
          className="text-sm italic text-gray-400"
        >
          {patient.dischargedate}
        </time>

        <div className="flex gap-2">
          <button
            onClick={() => deletePatient(patient.id)}
            className="px-3 py-2 rounded-lg bg-red-600 text-white"
          >
            <i class="bi bi-trash3-fill"></i>
          </button>
          <button
            onClick={() => setPatient(patient)}
            className="px-3 py-2 rounded-lg bg-gray-600 text-white"
          >
            <i class="bi bi-pencil-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
