import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";
import { useContext, useState } from "react";
import Header from "../header/Header.js";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import TelaMovimentacao from "../telaMovimentacao/TelaMovimentacao";

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
            <Main alinhamento={ dadosUsuario.movimentacao.length === 0? "center" : "flex-start" }  >
                {dadosUsuario.movimentacao.length === 0 ? <h4>Não a registro de entra ou saida</h4> 
                : dadosUsuario.movimentacao.map((items)=>(<p>{items.descricao} {items.valor}</p>))} {/* criar styled e colocar cor a depender do tipo da mivimentação entrada ou saida*/}
            </Main>
            <Footer>
                <Link to={'/movimentacao/entrada'}>
                    <Button >
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova Entrada</p>
                    </Button>
                </Link>
                <Link to={'/movimentacao/saida'}>
                    <Button >
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova Saida</p>
                    </Button>
                </Link>
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
    align-items:${props => props.alinhamento};

    h4{
        width: 180px;
        height: 46px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
    
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    width: 90vw;
    margin-top: 20px;
`