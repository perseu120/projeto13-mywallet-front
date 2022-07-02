import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";

function TelaLogin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { token, setToken, dadosUsuario, setDadosUsuario} = useContext(UserContext); 

  const navigate = useNavigate();

  function login() {
    const body = {
      email,
      senha
    }

    const promise = axios.post("http://localhost:5000/login", body);

    promise.then((response) => {
      setToken(response.data.token);
      
    })
    promise.catch((err) => { alert("erro ao realizar login"); })

  }

  return (

    <Container>

      <h1>MyWallet</h1>
      <Form onSubmit={(e) => { e.preventDefault() }}>
        <input placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email"></input>
        <input placeholder="senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} type="password"></input>

        <button type="submit" onClick={() => { login() }}>Entrar</button>
      </Form>
      <Link to="/sign-up">
        Primeira vez? cadastre-se!
      </Link>
    </Container>
  );
}

export default TelaLogin;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #8C11BE;
  height: 100vh;

  img{
      width: 299px;
      height: 49px;
      margin-top: 68px;
      margin-bottom: 100px;
  }

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
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    margin-bottom: 16px;
  }

  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;

    width: 298px;
    height: 52px;
    background: #A328D6;
    border-radius: 5px;
    border: 0px;
    margin-bottom: 24px;
    margin-top: 8px;
    width: 326px;
    
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;

  }


`