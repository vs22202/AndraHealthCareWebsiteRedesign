import React,{useEffect, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { Dropdown } from './DropDown';
import logoimg from '../pictures/Logo.png';
import { useAuth  } from '../contexts/AuthContext';
import { db, getUserDetails } from '../firebase';
import { getDefaultNormalizer } from '@testing-library/react';
export const Nav= styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
height:1.813rem;
margin:2.4rem 1.5rem;
background-color:${props=>props.theme.pcolor};
`;
export const RightNav=styled.div`
height:100%;
display:flex;
align-items:flex-end;
`;
export const LeftNav=styled.div`
height:100%;
display:flex;
align-items:flex-end;
`
;
export const Splul=styled.ul`
display: grid;
grid-template-columns: repeat(2, auto);
grid-gap: 10px;
list-style: none;
text-align: center;
justify-content: start;
margin-left: 1.5rem;
`;
export const Splli=styled.li`
display: flex;
position:relative;
align-items: center;
height:100%;
`;
export const SplLink=styled(Link)`
color: ${props=>props.theme.scolor};
display:flex;
align-items:center;
height:100%;
font-size:16px;
text-decoration: none;
padding: 0.5em 1em;
white-space:nowrap;
transition: all 0.25s ease-in;
&:hover{
    color:${props=>props.theme.hovercolor};
    border: 1px solid ${props=>props.theme.scolor};
    text-decoration:underline;
}
`;
export const Spli=styled.i`
margin-left:0.188rem;
margin-top:0.188rem;
height:100%
`;


export const Navbar = () => {
    const [dropDown,setDropdown]=useState(false);
    const [error,setError]=useState("");
    const [name,setName]=useState();
    const {currentUser,logout,getUserDetails,userDetails} = useAuth();
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
     async function handleLogout(){
        setError('')
        try{
          await logout()

        }
        catch{
          setError('Error while logging out')
        }
      }
      useEffect(()=>{
        if(currentUser){
        db.collection("userDetails").doc(currentUser.email).get().then((doc)=>{
          setName(doc.data().name);
          console.log(name,doc.data().name)
        })} 
        getUserDetails();
        setName(userDetails.name);
      },[currentUser])
      return (
        <div style={{display:'flex',flexDirection:'column'} }>
        <Nav>
            <RightNav>
            <Splul>
                <Splli>
                    <SplLink to="/">Home</SplLink>
                </Splli>
                <Splli onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <SplLink to="/">Information<Spli className='fas fa-caret-down'></Spli></SplLink>
                    {dropDown && <Dropdown/>}
                </Splli>
            </Splul>
            </RightNav>
            <LeftNav>
            <Splul>
                    {currentUser &&  <Splli><SplLink to="/ActualProfile">{!name && 'Profile'}{name && name.toUpperCase()}</SplLink><SplLink to="/" onClick={handleLogout}>Logout</SplLink></Splli> }
                    {!currentUser && <Splli><SplLink to="/Login">SignIn / SignUp</SplLink></Splli>}                       
            </Splul>
            </LeftNav>
            
        </Nav>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img src={logoimg} alt= "andra logo" style={{}}></img>
        </div>
        </div>
    )
}


