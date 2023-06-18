import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import fileUpLoad from "../../services/fileUpLoad";
import { useDispatch } from "react-redux";
import { registerActionAsync } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Por favor ingresar su nombre"),
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "La contraseña debe contener al menos 8 caracteres.")
    .max(16, "La contraseña no puede contener más de 16 caracteres")
    .oneOf(
      [yup.ref("repeatPassword")],
      "Las contraseñas ingresadas no coinciden"
    ),
  repeatPassword: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "La contraseña debe contener al menos 8 caracteres.")
    .max(16, "La contraseña no puede contener más de 16 caracteres")
    .oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
  avatar: yup
    .mixed()
    .test("file", "Por favor ingrese una imagen", (value) =>
      value.length > 0 ? true : false
    ),
});

function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateUser = async (dataForm) => {
    // console.log("datos del formulario ", dataForm);
    const avatar = await fileUpLoad(dataForm.avatar[0]);
    const newUser = {
      ...dataForm,
      avatar: avatar,
    };
    console.log(newUser);
    dispatch(registerActionAsync(newUser));
  };

  return (
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <input type="text" name="email" {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Contraseña:</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <label>Confirme Contraseña:</label>
        <input type="password" {...register("repeatPassword")} />
        <p>{errors.repeatPassword?.message}</p>
      </div>

      <div>
        <label>Imagen:</label>
        <input type="file" {...register("avatar")} />
        <p>{errors.avatar?.message}</p>
      </div>

      <button type="submit">Registrarse</button>

      <p>
        ¿Ya tienes una Cuenta? <Link to="/">Inicia sesion con tu cuenta!</Link>{" "}
      </p>
    </form>
  );
}

export default Register;
