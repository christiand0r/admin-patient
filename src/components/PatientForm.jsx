import { useState } from "react";
import { generateID } from "../helpers/tokens";

// const initialPatient = {
//   dischargedate: "",
//   ownermail: "",
//   ownername: "",
//   petname: "",
//   petsymptoms: "",
// };

const PatientForm = ({ patient, setPatients, setPatient, updatePatient }) => {
  const [errors, setErrors] = useState({});

  const registerPatient = (e) => {
    e.preventDefault();

    const patientData = Object.fromEntries(new FormData(e.target));

    const hasError = Object.entries(patientData)
      .map((entrie) => {
        const [key, value] = entrie;

        setErrors((errors) => ({
          ...errors,
          [key]: value ? null : "El campo es requerido",
        }));

        return !value;
      })
      .some((value) => value);

    if (hasError) return;

    patient
      ? updatePatient({ id: patient.id, ...patientData })
      : setPatients((patients) => [
          ...patients,
          { id: generateID(), ...patientData },
        ]);

    setPatient(null);

    e.target.reset();
  };

  return (
    <div className="col-span-1 px-6 py-10 rounded-lg shadow-sm bg-white lg:col-span-3">
      <div className="flex flex-col gap-1">
        <h2 className="font-black text-3xl">Seguimiento Pacientes</h2>
        <p className="text-base">
          Añade pacientes y{" "}
          <span className="font-bold text-cyan-500">administralos</span>
        </p>
      </div>

      <form onSubmit={registerPatient} className="flex flex-col gap-5 mt-6">
        <div>
          <label
            htmlFor="petname"
            className="block font-bold text-sm mb-2 uppercase text-gray-400"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="petname"
            name="petname"
            defaultValue={patient?.petname || ""}
            placeholder="Nombre de la mascota"
            className={`border p-2 rounded-lg outline-none w-full transition-shadow focus:shadow-outline placeholder-gray-400 ${
              errors?.petname ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors?.petname && (
            <p className="text-xs text-red-500">{errors?.petname}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="ownername"
            className="block font-bold text-sm mb-2 uppercase text-gray-400"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="ownername"
            name="ownername"
            defaultValue={patient?.ownername || ""}
            placeholder="Nombre del propietario"
            className={`border p-2 rounded-lg outline-none w-full transition-shadow focus:shadow-outline placeholder-gray-400 ${
              errors?.ownername ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors?.ownername && (
            <p className="text-xs text-red-500">{errors?.ownername}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="ownermail"
            className="block font-bold text-sm mb-2 uppercase text-gray-400"
          >
            Correo Propietario
          </label>
          <input
            type="email"
            id="ownermail"
            name="ownermail"
            defaultValue={patient?.ownermail || ""}
            placeholder="Correo electrónico del propietario"
            className={`border p-2 rounded-lg outline-none w-full transition-shadow focus:shadow-outline placeholder-gray-400 ${
              errors?.ownermail ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors?.ownermail && (
            <p className="text-xs text-red-500">{errors?.ownermail}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="dischargedate"
            className="block font-bold text-sm mb-2 uppercase text-gray-400"
          >
            Fecha de Alta
          </label>
          <input
            type="date"
            id="dischargedate"
            name="dischargedate"
            defaultValue={patient?.dischargedate || ""}
            className={`border p-2 rounded-lg outline-none w-full transition-shadow focus:shadow-outline placeholder-gray-400 ${
              errors?.dischargedate ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors?.dischargedate && (
            <p className="text-xs text-red-500">{errors?.dischargedate}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="petsymptoms"
            className="block font-bold text-sm mb-2 uppercase text-gray-400"
          >
            Síntomas
          </label>
          <textarea
            id="petsymptoms"
            name="petsymptoms"
            defaultValue={patient?.petsymptoms || ""}
            placeholder="Síntomas de la mascota"
            className={`border p-2 rounded-lg outline-none resize-none h-40 w-full transition-shadow focus:shadow-outline placeholder-gray-400 ${
              errors?.petsymptoms ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors?.petsymptoms && (
            <p className="text-xs text-red-500">{errors?.petsymptoms}</p>
          )}
        </div>

        <button
          type="submit"
          className="font-black text-lg uppercase px-6 py-4 rounded-lg w-full transition-colors bg-cyan-500 text-white hover:bg-cyan-600"
        >
          {patient ? "Actualizar paciente" : "Registrar paciente"}
        </button>
      </form>
    </div>
  );
};
export default PatientForm;
