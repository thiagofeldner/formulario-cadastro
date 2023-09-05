import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidaçõesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  
  const [nome, setNome] = useState("");
  const [sobrenomne, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({nome, sobrenomne, cpf, novidades, promocoes});
        }
      }}
    >
      <TextField
        value={nome}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        onChange={(event) => setNome(event.target.value)}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;


