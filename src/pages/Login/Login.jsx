import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { loginActionAsync } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio"),
});

function Login() {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logIn = (dataForm) => {
    console.log(dataForm);
    dispatch(loginActionAsync(dataForm.email, dataForm.password));
  }

  return (
    <form onSubmit={handleSubmit(logIn)}>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
    </div>

    <div>
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
    </div>

    <button type="submit">Iniciar sesión</button>

    <p>¿No tienes una Cuenta? <Link to="/register">Haz click aqui!</Link> </p>
  </form>
  )
}

export default Login