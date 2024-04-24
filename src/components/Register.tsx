import {
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "Este campo es obligatorio";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (formData.lastname.trim() === "") {
      newErrors.lastname = "Este campo es obligatorio";
      isValid = false;
    } else {
      newErrors.lastname = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Este campo es obligatorio";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Este campo es obligatorio";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "El phone debe ser un número";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Form submitted");
      console.log(formData);
    }
  };

  const handleLoginClick = () => {
    console.log("Hacia login");
    //history.push('/login');
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md mt-14">
          <h1 className="text-center text-gray-600 text-3xl font-bold">
            CREAR CUENTA
          </h1>
          <form
            className="bg-white px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name && "border-red-500"
                }`}
                id="name"
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Apellido
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.lastname && "border-red-500"
                }`}
                id="lastname"
                type="text"
                placeholder="Apellido"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && (
                <p className="text-red-500 text-xs italic">{errors.lastname}</p>
              )}
            </div>
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
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
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
            <div className="mb-6">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Celular
              </label>
              <div className="relative">
                <PhoneIcon className="h-5 w-5 absolute left-3 top-2 text-gray-500" />
                <input
                  className={`shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.phone && "border-red-500"
                  }`}
                  id="phone"
                  type="text"
                  placeholder="Celular"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs italic">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-700 hover:bg-gray-500 text-white font-bold mt-4 py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrarse
              </button>
            </div>
          </form>
          <div className="text-center mt-1">
            <p>
              ¿Ya tienes cuenta?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleLoginClick}
              >
                Iniciar sesión
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;