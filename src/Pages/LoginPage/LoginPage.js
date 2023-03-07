import AccountBox from "../../components/AccountBox";
import styled from "styled-components";
import { useLocation } from "react-router";
import { StyledAlert } from "../../components/Common";
const Container=styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:center;
`;
const LoginPage=()=>{
    const location= useLocation()
return(
    <Container>
       {location.state && <StyledAlert variant='danger'>{location.state.text}</StyledAlert>}
    <AccountBox prevPath={location.state && location.state.path}></AccountBox>
    </Container>
)
}
export default LoginPage;
