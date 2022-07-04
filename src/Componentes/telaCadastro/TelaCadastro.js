import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [confirmaSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  function cadastro() {

    if (senha !== confirmaSenha) {
      alert("Senhas não confere");
      return;
    }

    const body = {
      nome,
      email,
      senha
    };


    const promise = axios.post("https://my-wallet1.herokuapp.com/sign-up", body);

    promise.then((response) => {
      console.log(response.data);

      navigate("/");
    });

    promise.catch((err) => {
      alert("erro ao realizar cadastro");
    });
  }

  return (
    <Container>

      <h1>MyWallet</h1>
      
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <input
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
        ></input>
        <input
          placeholder="Confirmar senha"
          value={confirmaSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          type="password"
        ></input>

        <button onClick={() => cadastro()}>Cadastra</button>
      </Form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </Container>
  );
}

export default TelaCadastro;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #8C11BE;
  height: 100vh;

  h1{
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 24px;
  }

  a{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;

    color: #FFFFFF;
  }

`
const Form = styled.form`

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
    width: 299px;
    height: 52px;
    background: #A328D6;
    border-radius: 5px;
    margin-top: 8px;
    margin-bottom: 24px;
    border: 0px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;

  }

`
