import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";
import Header from "../header/Header";

function TelaMovimentacao({type}) {

    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");

    const navigate = useNavigate();

    function movimentacao() {
        const body ={ 
            descricao,
            valor:parseFloat(Math.abs(valor).toFixed(2)),
            type
        }

        console.log(body);

        // const promise = axios.post("http://localhost:5000/movimentacao", body);

        // promise.then((response) => {
            
        //     navigate('/home');
        // })
        // promise.catch((err) => { alert("erro ao realizar login"); })

    }

    return (

        <Container>
            <Header>
                <h2>Nova {type}</h2>

                <Link to={"/home"}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </Link>
            </Header>

            <Form onSubmit={(e) => { e.preventDefault() }}>
                <input placeholder="Valor" value={valor} onChange={(e) => { setValor(e.target.value) }} type="text"></input>
                <input placeholder="Descrição" value={descricao} onChange={(e) => { setDescricao(e.target.value) }} type="text"></input>

                <button type="submit" onClick={() => { movimentacao() }}> Nova {type}</button>
            </Form>
        </Container>
    );
}

export default TelaMovimentacao;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #8C11BE;
  height: 100vh;

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