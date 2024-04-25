import React, { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.email.trim() === "") {
      newErrors.email = "Este campo es obligatorio";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.length < 8) {
      newErrors.password =
        "La contraseña debe tener al menos 8 caracteres";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Form submitted");
      console.log(formData);
    }
  };

  const handleLoginClick = () => {
    console.log("Hacia registrarse");
  };

  return (
    <>
      <div style={{ backgroundColor: "#002D62" }}>
      <div className="flex justify-center items-center h-screen">
  <div className="w-full max-w-md mt-14 bg-white rounded-lg p-8">
    <h1 className="text-center text-black text-3xl font-bold">
      INICIAR SESION
    </h1>
    <p className="text-black text-xl mt-4">
      Inicia sesion a la plataforma con tu correo electronico y contraseña.
    </p>
    <form
      className="bg-white rounded-lg p-8 mt-4"
      onSubmit={handleSubmit}
    >
              <div className="mb-4">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 absolute left-3 top-2 text-gray-500" />
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.email && "border-red-500"
                    }`}
                    id="email"
                    type="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-500 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <LockClosedIcon className="h-5 w-5 absolute left-3 top-2 text-gray-500" />
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.password && "border-red-500"
                    }`}
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold mt-4 py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Iniciar Sesión
              </button>


              </div>
            </form>
            <div className="text-center mt-1">
              <p>
                ¿No tienes cuenta?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleLoginClick}
                >
                  Registrarse
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
