import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";
import { useContext, useState } from "react";
import Header from "../header/Header.js";
import Button from "../button/Button";

export default function TelaInicial() {
    const { token, setToken } = useContext(UserContext);

    return (

        <Container>
            <Header>
                <h2>Ola, Fulano</h2>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
            <Main>
                <p>Não a registro de entra ou saida ainda</p>
            </Main>
            <Footer>
                <Button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </Button>
                <Button>
                    <ion-icon name="add-circle-outline"></ion-icon>
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