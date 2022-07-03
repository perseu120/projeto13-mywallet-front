import styled from "styled-components";

export default function Button(props) {
    return (
        <ContainerBotao>
            {props.children}
        </ContainerBotao>
    );
}

const ContainerBotao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 10px;
    width: 35vw;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    color: white;

    ion-icon {
        color: white;
        font-size: 34px;
    }

`
