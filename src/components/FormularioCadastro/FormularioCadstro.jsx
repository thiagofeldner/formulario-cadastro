import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={proximaEtapa}/>, 
    <DadosPessoais aoEnviar={proximaEtapa} validarCpf={validarCpf} />, 
    <DadosEntrega aoEnviar={aoEnviar}/>
  ];

  function proximaEtapa(){
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      {formularios[etapaAtual]}
      
    </>
  );
}

export default FormularioCadastro;
