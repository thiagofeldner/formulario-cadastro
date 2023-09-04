import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({ aoEnviar, validacoes }) {
  
  const [nome, setNome] = useState("");
  const [sobrenomne, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros}
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado)
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenomne, cpf, novidades, promocoes});
      }}
    >
      <TextField
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        onChange={(event) => setNome(event.target.value)}
        fullWidth
      />

      <TextField
        value={sobrenomne}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(event) => setSobrenome(event.target.value)}
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        onChange={(event) => setCpf(event.target.value)}
        fullWidth
        name="cpf"
        onBlur = {validarCampos}
        error={!erros.cpf.valido}
        helperText= {erros.cpf.texto}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            name="Promoções"
            onChange={(event) => setPromocoes(event.target.checked)}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            name="Novidades"
            onChange={(event) => setNovidades(event.target.checked)}
          />
        }
      />

      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;


