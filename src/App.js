import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadstro';
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto';

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h3'align='center' component='h1'>Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
      </Container>
    );
  }  
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else {
    return {valido:true, texto:""}
  }
}

export default App;
