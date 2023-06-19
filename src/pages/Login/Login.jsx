import React, { useState, useEffect } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import SplashScreen from "../splashScreen/SplashScreen";

function Login() {
  const [mostrarPantallaDeCarga, setMostrarPantallaDeCarga] = useState(true);

  useEffect(() => {
    // Simula una carga asincrónica (por ejemplo, una llamada a una API o un retardo de tiempo)
    setTimeout(() => {
      setMostrarPantallaDeCarga(false);
    }, 1000); // 3 segundos de carga simulada
  }, []);

  return mostrarPantallaDeCarga ? <SplashScreen /> : <LoginForm />;
}

export default Login;
