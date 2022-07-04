import styled from "styled-components";

export default function Paragrafo({data, descricao, valor, cor}){
    return (
        <Container>
            <Div>
                <Data>{data}</Data>
                <Descricao>{descricao}</Descricao>
            </Div>
            
            <Valor cor={cor}>{valor.toFixed(2)} R$</Valor>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;

    width: 90vw;
    margin-top: 10px ;

`
const Div = styled.div`
    display: flex;
    justify-content: space-between;

`
const Data = styled.p`
   
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-right: 15px;

    color: #C6C6C6;
`
const Descricao = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000
`

const Valor = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    color: ${props=>props.cor};
`