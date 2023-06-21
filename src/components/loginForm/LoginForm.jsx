import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});

function LoginForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logIn = (dataForm) => {
    dispatch(loginActionAsync(dataForm.email, dataForm.password));
  };

  return (
    <form className="form" onSubmit={handleSubmit(logIn)}>
      <div className="form__input-box">
        <h1>Iniciar sesion</h1>
        <div className="form__input-field">
          <input
            type="text"
            id="email"
            name="email"
            className="form__input"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="email">Email:</label>
        </div>

        <div className="form__input-field">
          <input
            type="password"
            id="password"
            name="password"
            className="form__input"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <label htmlFor="password">Contraseña:</label>
        </div>

        <div className="action">
          <button className="action__submit" type="submit">
            ingresar 
          </button>

          <div className="sigin">
            <p>
              ¿No tienes una Cuenta?{" "}
              <Link className="sigin__enlace" to="/register">
                Haz click aqui!
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
