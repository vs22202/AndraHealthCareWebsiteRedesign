import { BoldLink, BoxContainer,FormContainer, Input, MutedLink, SubmitButton ,StyledAlert } from '../../components/Common'
import {Marginer} from '../../components/Marginer'
import React, { useState }  from 'react'
import { useContext ,useRef } from "react";
import { AccountContext } from '../../components/accontContext';
import { useAuth  } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
const ProfilePage = (props) => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef() 
    const {currentUser,updateEmail,updatePassword} =useAuth()
    const [error,setError]=useState('');
    const [loading,setLoading]=useState('');
    const history=useHistory();
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        const promises =[]
        setLoading(true)
        setError('')
        if(emailRef.current.value!==currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(()=>{
            history.push('/')
        }).catch(()=>{
            setError('Failed to update account')
        }).finally(()=>{
            setLoading(false)
        })
     }
    return (
        <div style={{display:'flex',flexDirection:'column',width:"100%",justifyContents:'center',alignItems:'center'}}>

            <BoxContainer style={{width:"40%"}}>
                {error && <StyledAlert variant="danger">{error}</StyledAlert>}
                <FormContainer id="my-form" onSubmit={handleSubmit}>
                    <Input type='text' placeholder='Full Name'></Input>
                    <Input type='email' placeholder='Email' ref={emailRef} required defaultValue={currentUser.email}></Input>
                    <Input type='password' placeholder='Password' ref={passwordRef} placeholder="Leave blank to keep the same"></Input>
                    <Input type='password' placeholder='Confirm Password' ref={passwordConfirmRef} placeholder="Leave blank to keep the same" ></Input>
                </FormContainer>
                <Marginer direction="vertical" margin="1em"/>
                <SubmitButton type='submit' form="my-form" disabled={loading}>Update Profile</SubmitButton>
                <Marginer direction='vertical' margin="1em"/>
                <MutedLink to='/'>Cancel</MutedLink>
                <Marginer direction='vertical' margin="1em"/>

            </BoxContainer>
            </div>
    )
}

export default ProfilePage;
