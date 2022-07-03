import styled from "styled-components";

export default function Header( props) {
    return (
        <ContainerTopo>
            {props.children }
        </ContainerTopo>
    );
}

const ContainerTopo = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 22px 10px 0px 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: white;
   
    ion-icon {
        color: white;
        font-size: 34px;
    }
    
`