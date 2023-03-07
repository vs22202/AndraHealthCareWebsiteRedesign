import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Splli } from './Navbar';
import { Input,BoxContainer,SubmitButton } from './Common';
import { Styledhead } from '../Pages/HomePage/HomePage';
import { Spli } from './Navbar';
import AppointmentForm from './AppointmentForm';
import AppointmentModal from './AppointmentModal';
import { Modal } from '@mui/material';


export const StyledSearchWithDropDown=styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
    width:70%;
    margin:1rem auto;
    border: 1px solid ${props=>props.theme.scolor};
    

`;
export const CusSubButton=styled(SubmitButton)`
    width:max-content;
    height:max-content;
    padding:0.5em;
`;
export const FlexBox=styled.div`
    display:flex;
    flex-direction:${props=>props.fdirec || 'row'};
    width:${props=>props.fwidth || '100%'};
    align-items:${props=>props.faitems || 'center'};
    justify-content:${props=>props.fjcontent || 'center'};
    margin:${props=>props.fmargin || '0'};
`;
export const CusSplli =styled(Splli)`
    padding:0.5em 0.5em;
    :not(:last-child){border-bottom:0.5px solid ${props=>props.theme.scolor};}
    
`;
export const CusInput = styled(Input)`
   padding:0.5em 0.5em;
   border-bottom:0.5px solid ${props=>props.theme.scolor};
`;


const SearchWithDropDown = ({handleTextChange, searchGoal, sendSearchValue}) => {
    const [display,setDisplay]=useState([])
    
    const [formDisplay,setFormDisplay]=useState(false)
    const textRef = useRef()

    const handleOptionClick=(e)=>{
        const newNode = document.getElementById('SearchInput');
        newNode.value=e.target.getAttribute('data-value');
        newNode.focus();
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(textRef);
        sendSearchValue(textRef.current.value);
    }
    return (
        <BoxContainer>
       <StyledSearchWithDropDown>
           <form onSubmit={handleSubmit} id="search">
            <FlexBox>
                <CusInput type='text' placeholder={`Search ${searchGoal}`} id='SearchInput' onChange={(e)=>{setDisplay(handleTextChange(e))}} ref={textRef}> 
                </CusInput>
                <CusSubButton type='submit' className="fa fa-search" form="search" ></CusSubButton>
            </FlexBox>    
            
           {!formDisplay && display.map((item,index)=>{
               console.log(item);
               return (<CusSplli key={index} data-value={item} onClick={handleOptionClick}>{item}</CusSplli>)
           })}
           </form>
       </StyledSearchWithDropDown>
       
       </BoxContainer>
    )
}

export default SearchWithDropDown
