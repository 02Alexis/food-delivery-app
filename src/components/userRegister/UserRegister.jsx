import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import fileUpLoad from "../../services/fileUpLoad";
import { useDispatch } from "react-redux";
import { registerActionAsync } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import "./UserRegister.scss";

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

function UserRegister() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateUser = async (dataForm) => {
    const avatar = await fileUpLoad(dataForm.avatar[0]);
    const newUser = {
      ...dataForm,
      avatar: avatar,
    };
    console.log(newUser);
    dispatch(registerActionAsync(newUser));
  };

  return (
    <form className="register" onSubmit={handleSubmit(handleCreateUser)}>
      <div className="container">
        <h1>Create account</h1>
        <div className="container__input-field">
          <input
            type="text"
            name="name"
            className="container__input"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <label>Nombre:</label>
        </div>

        <div className="container__input-field">
          <input
            type="text"
            name="email"
            className="container__input"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label>Email:</label>
        </div>

        <div className="container__input-field">
          <input
            type="password"
            className="container__input"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <label>Contraseña:</label>
        </div>

        <div className="container__input-field">
          <input
            type="password"
            className="container__input"
            {...register("repeatPassword")}
          />
          <p>{errors.repeatPassword?.message}</p>
          <label>Confirme Contraseña:</label>
        </div>

        <div className="container__input-field">
          <input
            type="file"
            className="container__input"
            {...register("avatar")}
          />
          <p>{errors.avatar?.message}</p>
        </div>

        <div className="axel">
          <button className="axel__submit" type="submit">
            Registrarse
          </button>

          <div className="endo">
            <p>
              ¿Ya tienes una Cuenta?
              <Link className="endo__enlace" to="/"> Inicia sesion con tu cuenta!</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserRegister;
