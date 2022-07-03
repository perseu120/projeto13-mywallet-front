import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";
import { useContext, useState } from "react";
import Header from "../header/Header.js";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function TelaInicial() {
    const { token, setToken, dadosUsuario } = useContext(UserContext);
    console.log(dadosUsuario);
    return (

        <Container>
            <Header>
                <h2>Ola, {dadosUsuario.nome}</h2>

                <Link to={"/"}>
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>


            </Header>
            <Main>
                {dadosUsuario.movimentacao.length === 0 ? <p>Não a registro de entra ou saida ainda</p> : <p>dados encontrados</p>}

            </Main>
            <Footer>
                <Button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </Button>
                <Button>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saida</p>
                </Button>
            </Footer>

        </Container>
    );
}

const Container = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #8C11BE;
    height: 100vh;
    `
const Main = styled.main`
    width: 90vw;
    height: 450px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    width: 90vw;
    margin-top: 20px;
`