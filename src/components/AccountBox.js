import React, { useState ,useEffect } from 'react'
import styled from 'styled-components';
import LoginForm from './LoginForm';
import { motion } from 'framer-motion';
import { AccountContext } from './accontContext';
import SignUpForm from './Signup';
export const BoxContainer=styled.div`
@media(min-width:768px){
    width:32.250em;
    min-height:34.375em;
    display:flex;
    flex-direction:column;
    margin:2rem 2rem;
    border-radius:1.18em;
    background-color:#fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position:relative;
    overflow:hidden;

};
width:16.125em;
min-height:34.375em;
display:flex;
flex-direction:column;
margin:2rem 2rem;
border-radius:1.18em;
background-color:#fff;
box-shadow: 0 0 2px rgba(15,15,15,0.28);
position:relative;
overflow:hidden;
    
`;
const BackDrop= styled(motion.div)`
width:160%;
height:100%;
position:absolute;
display:flex;
flex-direction:column;
top:-18.125em;
left:-4.375em;
transform:rotate(60deg);
border-radius:50%;
background: ${prop=>prop.theme.scolor};
background: linear-gradient(75deg, ${prop=>prop.theme.scolor} 67%, rgba(219,214,214,1) 100%);
transition: all 0.5s ease-in-out;
&:hover{
    filter: brightness(1.2);
}
`;
const TopContainer=styled.div`
width:100%;
height:250px;
display:flex;
flex-direction:column;
justify-content:flex-end;
padding:0 1.8em;
padding-bottom:5em;

`;
const HeaderContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
`;
const HeaderText=styled.h2`
font-size:30px;
font-weight:600;
line-height:1.24;
color:${props=>props.theme.hovercolor};
z-index:10;
margin:0;
`;
const SmallText= styled.h5`
font-size:11px;
font-weight:500;
color:${props=>props.theme.hovercolor};
z-index:0;
margin:0;
margin-top:7px;
`;
const InnerContainer= styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0 1.8em;
`;
const backdropVariants={
    expanded:{
        width:"300%",
        height:"200%",
        borderRadius:"50%",
        transform:"rotate(60deg)",
    },
    collapsed:{
        width:"160%",
        height:"100%",
        borderRadius:"50%",
        transform:"rotate(60deg)",
    }
}
const expandingTransition={
    type:"spring",
    duration:3.3,
    stiffness:30,
}
const AccountBox = (props) => {
 
    const[isExpanded,setExpanded]=useState(false);
    const[active,setActive]=useState("signin");
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      });
    const playExpandingAnimation=()=>{
        setExpanded(true);
        setTimeout(()=>{
            setExpanded(false)
        }, 3300-1848);
    };
    const switchToSignUp=()=>{
        playExpandingAnimation();
        if(window.innerWidth<1024){
        setTimeout(()=>{
            setActive("signup");
        },2000);
    }
    else{
        setActive("signup");
    }
        
    };
    const switchToSignIn=()=>{
        playExpandingAnimation();
        if(window.innerWidth<1024){
        setTimeout(()=>{
            setActive("signin");
        },2000);
        }
        else{
            setActive("signin");
        }
    };
    const contextValue={ switchToSignUp,switchToSignIn};
    return (
            <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    {width<768 && <BackDrop initial={false} animate={isExpanded ? "expanded":"collapsed"} variants={backdropVariants}
                    transition={expandingTransition}
                    />}
                    {active==="signin" &&<HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Please Sign-in to Continue!</SmallText>
                    </HeaderContainer>}                    
                    {active==="signup" &&<HeaderContainer>
                        <HeaderText>Create</HeaderText>
                        <HeaderText>Account</HeaderText>
                        <SmallText>Please Sign-up to Continue!</SmallText>
                    </HeaderContainer>}
                </TopContainer>
                <InnerContainer>
                    {active==="signin" && <LoginForm prevPath={props.prevPath}/>}
                    {active==="signup" && <SignUpForm/>}
                </InnerContainer>
            </BoxContainer>
            </AccountContext.Provider>
    )
}

export default AccountBox
