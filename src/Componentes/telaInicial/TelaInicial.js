import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";
import { useContext, useEffect, useState } from "react";
import Header from "../header/Header.js";
import Button from "../button/Button";
import { Link } from "react-router-dom";

import Paragrafo from "../paragrafo/Paragrafo";

export default function TelaInicial() {
    const { token, dadosUsuario } = useContext(UserContext); // fazer um get que retorna todas as transaçoes de um usuario usando o tokken
    const [saldo, setSaldo] = useState(0);
    const [transacao, setTransacao] = useState([]);

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const promise = axios.get("https://my-wallet1.herokuapp.com/movimentacao", config);
    
        promise.then((response) => {
            let valor = 0;
            setTransacao(response.data);
            response.data.forEach(element => {
                if(element.type === "Entrada"){
                    valor += element.valor;
                }else{
                    valor -= element.valor;
                }
            });
            setSaldo(valor);
        })
    
        promise.catch((err) => {
          console.log(err);
        })
    
      }, [])

    return (

        <Container>
            <Header>
                <h2>Ola, {dadosUsuario.nome}</h2>

                <Link to={"/"}>
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>

                
            </Header>
            <Main alinhamento={ transacao.length === 0? "center" : "flex-start" }  >
                {transacao.length === 0 ? <h4>Não a registro de entra ou saida</h4> 
                : transacao.map((items, index)=>(<Paragrafo key={index} data= {items.data} descricao ={items.descricao} valor={items.valor} cor={items.type === "Entrada"?"#03AC00":"#C70000"} />))} {/* criar styled e colocar cor a depender do tipo da mivimentação entrada ou saida*/}

                <DivSaldo>
                    <Saldo>Saldo</Saldo>
                    <ValorSaldo>{saldo}</ValorSaldo>
                </DivSaldo>
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

const DivSaldo = styled.div`
    display: flex;
    justify-content: space-between;

    position: absolute;
    left: 35px;
    right: 35px;
    bottom: 230px;
`
const Saldo = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    color: #000000;
`
const ValorSaldo = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    text-align: right;

    color: #03AC00;
`

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
    justify-content: ${props => props.alinhamento};
    align-items:center;
    flex-direction: column;

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