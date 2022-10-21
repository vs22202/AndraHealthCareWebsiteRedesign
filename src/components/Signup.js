import { BoldLink, BoxContainer,FormContainer, Input, MutedLink, SubmitButton ,StyledAlert } from './Common'
import {Marginer} from './Marginer'
import React, { useState }  from 'react'
import { useContext ,useRef } from "react";
import { AccountContext } from './accontContext';
import { useAuth  } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { db } from '../firebase';
const SignUpForm = (props) => {
    const {switchToSignIn} = useContext(AccountContext);
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef() 
    const nameRef=useRef()
    const {signup,currentUser} =useAuth()
    const [error,setError]=useState('');
    const [loading,setLoading]=useState('');
    const [passTog1,setPassTog1]=useState(false);
    const [passTog2,setPassTog2]=useState(false);
    const history=useHistory();
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value)
        db.collection('userDetails').doc(emailRef.current.value).set({
            name:nameRef.current.value,
            email:emailRef.current.value
        })        
        setLoading(false)
        history.push("/")
        }
        catch(err){
            console.log(err,err.message,err.code)
            setError(err.code.slice(5))
            setLoading(false)
        }

        
    }
    return (
            <BoxContainer>
                {error && <StyledAlert variant="danger">{error}</StyledAlert>}
                <FormContainer id="my-form" onSubmit={handleSubmit}>
                    <Input type='text' placeholder='Full Name' ref={nameRef} required></Input>
                    <Input type='email' placeholder='Email' ref={emailRef} required></Input>
                    <div style={{position:'relative'}}>
                    <Input type={(passTog1 && 'text' )|| 'password'} placeholder='Password' ref={passwordRef} required></Input>
                    {passTog1 && <i style={{display:'inline-block', position:'absolute',right:'5%', top:'25%'}} className='fa fa-eye' onClick ={() =>{setPassTog1(!passTog1)}}></i>}
                    {!passTog1 && <i  style={{display:'inline-block', position:'absolute',right:'5%', top:'25%'}} className='fa fa-eye-slash' onClick ={() =>{setPassTog1(!passTog1)}}></i>}                      </div>
                    <div style={{position:'relative'}}>
                    <Input type={(passTog2 && 'text' )|| 'password'} placeholder='Confirm Password' ref={passwordConfirmRef} required ></Input>
                    {passTog2 && <i style={{display:'inline-block', position:'absolute',right:'5%', top:'25%'}} className='fa fa-eye' onClick ={() =>{setPassTog2(!passTog2)}}></i>}
                    {!passTog2 && <i  style={{display:'inline-block', position:'absolute',right:'5%', top:'25%'}} className='fa fa-eye-slash' onClick ={() =>{setPassTog2(!passTog2)}}></i>}     
                    </div>               
                </FormContainer>
                <Marginer direction="vertical" margin={7}/>
                <SubmitButton type='submit' form="my-form" disabled={loading}>SignUp</SubmitButton>
                <Marginer direction='vertical' margin="1em"/>
                <MutedLink to='/Login'>Already have an account? <BoldLink href="#" onClick={switchToSignIn}>SignIn</BoldLink></MutedLink>
            </BoxContainer>
    )
}

export default SignUpForm;
