
import { styled } from '@mui/system';
import { BoxContainer, StyledAlert } from './Common';
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import SearchWithDropDown, { FlexBox } from './SearchWithDropDown'
import styledComponentsCjs from 'styled-components';
import { Styledhead } from '../Pages/HomePage/HomePage';
import { contextTypes } from 'react-spacer';
import AppointmentForm from './AppointmentForm';
import { Spli } from './Navbar';
import VaccineForm from './VaccineForm';
const ModalHolder =styledComponentsCjs.div`
width:clamp(20rem,40rem,50rem);
height:500px;
background:${prop=>prop.theme.pcolor};
margin:5em auto;
border-radius:3em;
padding:2em 1em;
`;
const Schemes =[
    {
        title:'Vaccine Appointments'

    },    
    {
        title:'Doctor Appointments'

    },
]
const hospitalWithCities =[
    {
        city:'Anantapuram',
        hospital:'Sri Sathya Sai Institute of Higher Medical Sciences, Puttaparthi'

    },     
    {
        city:'Tirupati',
        hospital:'Sri Venkateswara Institute of Medical Sciences'

    },     
    {
        city:'Vijayawada',
        hospital:'L. V. Prasad Eye Institute'

    },    
    {
        city:'Vijayawada',
        hospital:'Siddhartha Medical College, NTR University of Health Sciences'

    },    
    {
        city:'Vijayawada',
        hospital:'Rainbow Hospitals'

    },     
    {
        city:'Visakhapatnam',
        hospital:'Apollo Hospitals, Visakhapatnam'

    },    
]
// const hospitalList;
// const handleSelection = (display)=>{
//     hospitalList=display;
// }
const handleTextChangeCity1 =(e)=>{
    console.log(e.target.value);
    const searcht=e.target.value;
    return Schemes.filter((Scheme)=>{
            return Scheme.title.toLowerCase().includes(searcht.toLowerCase())
    }) || []
}
const handleTextChangeCity = (e)=>{
    const searchterm=e.target.value;
    const keys= Object.keys(hospitalWithCities[1])
    let sendDisplay=[]
    hospitalWithCities.forEach((entry,index)=>{
        entry.city.toLowerCase().includes(searchterm.toLowerCase()) ? sendDisplay.push(entry.city) : console.log('nope');
    })
    sendDisplay=[...new Set(sendDisplay)];
    console.log(sendDisplay)
    return sendDisplay
}
let hospitalDisplay=[]

const StyledIcon = styledComponentsCjs.i`
    position:absolute;
    top:-7%;
    left:-23%;
    cursor:pointer;
    padding:0.25em 0.5em;
    background:rgba(100,100,100,0.0);
    border-radius:20%;
    transition: all 200ms ease-in;
    &:hover{
        background:rgba(100,100,100,0.3);
        border-radius:30%;
    }
`;

const AppointmentModal = React.forwardRef(({handleModalClose,disabled,children,formType}, ref) => {
    const sendSearchValue = (cityRef)=>{ 
        hospitalDisplay=[];
        const temp =[];
        hospitalWithCities.forEach((entry,index)=>{
            entry.city.toLowerCase()===cityRef.toLowerCase() ? hospitalDisplay.push(entry.hospital) : console.log('nope');
        })
        console.log(hospitalDisplay,"hellos")
        if(hospitalDisplay.length !== 0){
        setDisplaySecond(true)
        setDisplayBackButton(true)
        setDisplayFirst(false)
        setDisplayCity(cityRef);
        setError("");
    }
        else{
            setError("Choose Valid City")
        }
    }
    const sendSearchValueHos = (hospitalRef) =>{
        if(hospitalDisplay.includes(hospitalRef)){
        setDisplayHospital(hospitalRef);
        setDisplaySecond(false);
        setDisplayForm(true);
        setError("");
        }
        else{
            setError("Choose Valid Hospital")
        }
    }
    const handleTextChangeHospital = (e)=>{
        const searchterm=e.target.value;
        console.log(searchterm);
        console.log(hospitalDisplay);
        let sendDisplay=[]
        hospitalDisplay.forEach((key,index)=>{
            key.toLowerCase().includes(searchterm.toLowerCase()) ?  sendDisplay.push(key) : console.log("nope");
            
        })
        return [...new Set(sendDisplay)];
    }
    const handleBackClick =(e)=>{
        if(displayForm === true){
            setDisplayForm(false);
            setDisplaySecond(true);
            setDisplayHospital("")
        }
        else if(displaySecond === true){
            setDisplayFirst(true);
            setDisplaySecond(false);
            setDisplayBackButton(false);
            setDisplayCity("")
        }
    }
    const theme=useTheme()
    const [displaySecond,setDisplaySecond] = useState(false)
    const [displayFirst,setDisplayFirst] = useState(true)
    const [error,setError] = useState("")
    const [displayForm,setDisplayForm] = useState(false)
    const [displayBackButton,setDisplayBackButton]=useState(false)
    const [displayCity,setDisplayCity] = useState("")
    const [displayHospital,setDisplayHospital] = useState("")
   
    return (
       <ModalHolder disabled={disabled && disabled || ""}>
           <FlexBox fdirec="column" disabled={disabled && disabled || ""}>
           <Styledhead style ={{display:'flex',position:'relative', alignItems:'center', justifyContent:'center'}}>{formType === 'doctor' ? 'Doctor Appointment' : 'Vaccine Appointment'}
           {displayBackButton && <StyledIcon className="fas fa-arrow-left"  onClick={handleBackClick}></StyledIcon>}
           <StyledIcon className="fas fa-window-close"  style={{left:'105%'}} onClick={handleModalClose}></StyledIcon>
           </Styledhead>
            {error !== "" && <StyledAlert variant='danger'>{error}</StyledAlert>}
            {displayFirst && <SearchWithDropDown sendSearchValue={sendSearchValue} handleTextChange={handleTextChangeCity} searchGoal='City' disabled={disabled && disabled || ""}/>}
            {displaySecond && <FlexBox fdirec='column'><h3>{displayCity}</h3><SearchWithDropDown sendSearchValue={sendSearchValueHos} handleTextChange={handleTextChangeHospital} searchGoal='Hospital' /></FlexBox>}
            {displayForm && formType==="doctor" && <AppointmentForm title={`${displayCity}: ${displayHospital}`}/>}
            {displayForm && formType==="vaccine" && <VaccineForm title={`${displayCity}: ${displayHospital}`}/>}
            {children && children}
        </FlexBox>
         </ModalHolder>
    )
});

export default AppointmentModal
