import React, { useEffect, useRef, useState } from 'react'
import { FlexBox } from '../../components/SearchWithDropDown';
import { useAuth } from '../../contexts/AuthContext'
import { FormContainer, Input, StyledAlert, SubmitButton } from '../../components/Common';
import styled,{useTheme} from 'styled-components';
import { Styledhead } from '../HomePage/HomePage';
import { db } from '../../firebase';
import { Splli, Splul } from '../../components/Navbar';
import { Marginer } from '../../components/Marginer';

export const StyledLabel = styled.label`
    font-size:14px;
`;
const ActualProfile = () => {
    const {currentUser,userDetails,updateUserDetails,updateEmail,updatePassword}=useAuth();
    const [inputState,setInputState]=useState("disabled");
    const [message,setMessage]=useState("");
    const [userDInformation,setUserDInformation]=useState()
    const [userVInformation,setUserVInformation]=useState()
    const [userBInformation,setUserBInformation]=useState()
    const [updateTip,setUpdateTip]=useState(false);
    const [loading,setLoading]=useState(false);
    const theme=useTheme()
    const emailRef = useRef()
    const nameRef = useRef()
    useEffect(()=>{
        db.collection("userDetails").doc(currentUser.email).collection("Appointments").get()
        .then(qsnap=>{
            setUserDInformation(qsnap.docs)
            console.log(qsnap.docs)
        })
        .catch(e=>{console.log(e)});        
        db.collection("userDetails").doc(currentUser.email).collection("Vaccine_Appointments").get()
        .then(qsnap=>{
            setUserVInformation(qsnap.docs)
        })
        .catch(e=>{console.log(e)});        
        db.collection("userDetails").doc(currentUser.email).collection("Benifit_Schemes").get()
        .then(qsnap=>{
            setUserBInformation(qsnap.docs)
        })
        .catch(e=>{console.log(e)});

    },[])
    const handleUpdateClick=()=>{
        setInputState("");
        setMessage("You Can Make Changes Now");
    }
    const handleSaveChanges = (e)=>{
        e.preventDefault();
        setLoading(true)
        const promises=[]
        setInputState("disabled");
        setMessage("Saving Changes...")
        try{
        if(emailRef.current.value!==currentUser.email){
            updateEmail(emailRef.current.value).catch(e=>{setMessage("Error With Updating Email")})
            updateUserDetails(currentUser.email,"email",emailRef.current.value) 
        }
        if(nameRef.current.value!==userDetails['name']){
            updateUserDetails(currentUser.email,"name",nameRef.current.value)
        }
        setMessage("Almost Done")
        }        
       catch(e){
            setMessage("Some Error Occured")
        }finally{
            setMessage("Succesfully Updated")
            setLoading(false)
        }

    }
    return (
        <div style={{marginLeft:'auto', marginRight:'auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{marginBottom:'2em'}}>
            <Styledhead>Your Profile</Styledhead>
            <form id='my-profile-form' onSubmit={handleSaveChanges}>
                <FlexBox fdirec="column" faitems='normal'>
                {message!=="" && <StyledAlert variant="sucess">{message}</StyledAlert>}
                    <FlexBox>
                        <StyledLabel htmlFor='email'>Email:</StyledLabel>
                        <Input type='email' disabled={inputState} defaultValue={currentUser.email} id='email' ref={emailRef}/>  
                    </FlexBox>         
                    <FlexBox>   
                        <StyledLabel htmlFor='name'>Name:</StyledLabel>
                        <Input type='text' disabled={inputState} defaultValue={userDetails['name']} id='name' ref={nameRef}/>       
                    </FlexBox>      
                    {inputState==="disabled" && <SubmitButton 
                    type='button' 
                    onClick={handleUpdateClick} 
                    onMouseEnter={()=>{setUpdateTip(true)}}
                    onMouseLeave={()=>{setUpdateTip(false)}}
                    style={{position:'relative', width:'max-content' ,padding:'0.5em'}}
                    >
                        {updateTip && <Splli style={{position:'absolute', padding:"0.5em",zIndex:'-1', color:theme.pcolor, background:'rgba(50,50,50,0.7)', borderRadius:'0.75em', left:'-50%', top:'100%', width:'max-content'}}>Update Profile</Splli>}
                        <i className='fa fa-pencil'></i>
                    </SubmitButton>}            
                    {inputState==="" && <SubmitButton 
                    type='submit' 
                    form='my-profile-form'
                    style={{position:'relative', width:'max-content' ,padding:'0.5em'}}
                    disabled ={loading}
                    >
                        <i style={{fontSize:'14px'}}>Save Changes</i>
                    </SubmitButton>}
                </FlexBox>
            </form>
            </div>
            <FlexBox fdirec='column' style={{flexWrap:'wrap'}}>
            <div style={{width:'100%',textAlign:'center'}}>
            <Styledhead style={{fontSize:'18px'}}>Doctor Appointments</Styledhead>
                {!userDInformation && <h4>Loading..</h4>}
                {userDInformation && !userDInformation.length && <h4>No Appointments</h4> }
                {userDInformation && userDInformation.map((doc,i)=>{
                    return <Splul style={{display:'flex',flexDirection:'column',margin:'1em auto',padding:'0.5em 2em',flexWrap:'wrap',width:'70%',border:`${theme.scolor} 1px solid`,alignItems:'start',justifyContent:'center',whiteSpace:'pre',overflow:'auto'}}>
                        <Splli>{`Appointment No: ${++i} `}</Splli>
                        <Splli><b>Location: </b> {doc.data().location}</Splli>
                        <Splli><b>Date: </b> {doc.data().date}</Splli>
                        <Splli><b>Time Slot: </b> {doc.data().timeSlot}</Splli>
                        </Splul>
                })}</div>
            <Marginer direction='vertical' margin={20}/>
            <div style={{width:'100%',textAlign:'center'}}>
            <Styledhead style={{fontSize:'18px'}}>Vaccination Appointments</Styledhead>
            {!userVInformation && <h4>Nothing To See.</h4>}
            {userVInformation && !userVInformation.length && <h4>No Appointments</h4> }
            {userVInformation && userVInformation.map((doc,i)=>{
                    return <Splul style={{display:'flex',flexDirection:'column',margin:'1em auto',padding:'0.5em 2em',width:'70%',border:`${theme.scolor} 1px solid`,alignItems:'start',justifyContent:'center',whiteSpace:'pre',overflow:'auto'}}>
                        <Splli>{`Appointment No: ${++i} `}</Splli>
                        <Splli><b>Location: </b> {doc.data().location}</Splli>
                        <Splli><b>Date: </b> {doc.data().date}</Splli>
                        <Splli><b>Time Slot: </b> {doc.data().timeSlot}</Splli>
                        </Splul>
                })}</div>
            <Marginer direction='vertical' margin={20}/>
            <div style={{width:'100%',textAlign:'center'}} >
            <Styledhead style={{fontSize:'18px'}}>Registered Benifit Schemes</Styledhead>
            {!userBInformation && <h4>Nothing To See.</h4>}
            {userBInformation && !userBInformation.length && <h4>No Registrations</h4>}
            {userBInformation && userBInformation.map((doc,i)=>{    
                    return <Splul style={{display:'flex',flexDirection:'column',margin:'1em auto',padding:'0.5em 2em',width:'70%',border:`${theme.scolor} 1px solid`,alignItems:'start',justifyContent:'center',whiteSpace:'pre',overflow:'auto'}}>
                        <Splli><b>City: </b> {doc.data().city}</Splli>
                        <Splli><b>State: </b> {doc.data().state}</Splli>
                        <Splli><b>Benifit Scheme: </b> {doc.data().scheme}</Splli>
                        </Splul>
                })}</div>
            <Marginer direction='vertical' margin={20}/>
        </FlexBox>
        </div>
    )
}

export default ActualProfile
