import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadstro';
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto';
import { validarCPF, validarSenha } from './models/cadastro';

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h3'align='center' component='h1' mt={5}>Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf:validarCPF, senha:validarSenha, nome:validarSenha }} />
      </Container>
    );
  }  
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
