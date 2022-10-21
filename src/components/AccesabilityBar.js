import styled from "styled-components";

const AccessablitybarContainer = styled.div`
    right:34.5%;
    top:-0.75%;
    display:flex;
    flex-direction:row;
    position:absolute;
    padding:0;
    width:30%;
    height:3rem;
    border: 1px solid ${props=>props.theme.scolor};
    align-items:center;
    justify-content:space-around;
    border-radius:20%;
    .Themetext{
        color:${props=>props.theme.hovercolor};
        position:relative;
        font-size:0.75rem;
    }
`;

const ThemeButton =styled.button`
    background:${props=>props.value};
    color:${props=>props.theme.pcolor};
    border:1px solid ${props=>props.theme.hovercolor};
    border-radius:10%;
    position:relative;
    padding:1%;
    font-size:0.65rem;
`;

export default function Accessablitybar(props){

    return(
        <AccessablitybarContainer>

        <span className="Themetext">Choose Theme </span>
        <ThemeButton value="#806517" onClick={props.handleTheme}> Theme1</ThemeButton>
        <ThemeButton value="rgba(247, 202, 24, 1)" onClick={props.handleTheme}> Theme2</ThemeButton>
        <ThemeButton value="rgb(200,162,200)" onClick={props.handleTheme}> Theme3</ThemeButton>

        
        </AccessablitybarContainer>

    )
}