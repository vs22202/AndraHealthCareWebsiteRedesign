import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:10px;
`;
export const FormContainer=styled.form`
width:100%;
display:flex;
flex-direction:column;
box-shadow: 0px 0px 2.5px rgba(15,15,15,0.19);
`;

export const MutedLink = styled(Link)`
font-size:14px;
color:rgba(0,0,0,0.8);
font-weight:400;
text-decoration:none;
`;

export const BoldLink =styled.a`
    font-size:16px;
    color:${prop=>prop.theme.scolor};
    font-weight:500;
    text-decoration:none;
    margin: 0 2px;
`;

export const Input= styled.input`
    outline:none;
    width:100%;
    height:42px;
    border: 1px solid rgba(200,200,200,0);
    padding: 0px 10px;
    font-size:12px;
    border-bottom: 1.4px solid transparent; 
    transition: all 200ms ease-in-out;
    &::placeholder{
        color:rgba(200,200,200,1);
    }
    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4);
    }
    &:focus{
        outline:none;
        border-bottom: 2px solid ${prop=>prop.theme.scolor};
        opacity:70%;
    }
`;
export const StyledAlert=styled.div`
    width:max-content;
    background:${props=>props.variant==='danger'?props.theme.dcolor:props.theme.sucolor};
    color:black;
    padding:1em;
    margin-bottom: 0.7em;
    font-size:14px;
    text-align:center;
    border: 1px solid rgb(0,0,0,0.4);
`;
export const SubmitButton =styled.button`
    width:100%;
    padding: 11px 40%;
    color:#fff;
    font-size:15px;
    font-weight:15px;
    border:none;
    border-radius: 100px 100px 100px 100px;
    cursor:pointer;
    transition: all 240ms ease-in-out;
    background: ${prop=>prop.theme.scolor};
    background: linear-gradient(75deg, ${prop=>prop.theme.scolor} 67%, rgba(219,214,214,1) 100%);
    &:hover{
        filter: brightness(1.2);
    }

`;