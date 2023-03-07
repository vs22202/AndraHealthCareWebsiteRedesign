import { BoldLink, BoxContainer,FormContainer, Input, MutedLink, SubmitButton, StyledAlert } from '../../components/Common'
import {Marginer} from '../../components/Marginer'
import { BoxContainer as Bc2 } from '../../components/AccountBox';
import React, { useContext ,useRef,useState} from 'react'
import { AccountContext } from '../../components/accontContext';
import { useAuth  } from '../../contexts/AuthContext'
import {SplLink} from '../../components/Navbar'
import { useHistory } from 'react-router-dom';
const ForgotPasswordPage = (props) => {
    const emailRef=useRef()
    const {resetPassword} =useAuth()
    const [error,setError]=useState('');
    const [message,setMessage]=useState('');
    const [loading,setLoading]=useState('');
    async function handleSubmit(e){
        e.preventDefault()

        try{
        setError('')
        setMessage('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage('Password reset link is sent to your email')
        }
        catch{
            setError('Failed To Reset Password')
        }
        setLoading(false)
    }
    return (
            <div style={{display:'flex',flexDirection:'column',width:"100%",height:"100%",justifyContents:'center',alignItems:'center',paddingBottom:"7em",paddingTop:"5em"}}>
                <BoxContainer style={{width:"30%"}}>
                    {error && <StyledAlert variant="danger">{error}</StyledAlert>}
                    {message && <StyledAlert variant="sucess">{message}</StyledAlert>}
                    <FormContainer id="my-form" onSubmit={handleSubmit}>
                        <Input type='email' placeholder='Email' ref={emailRef} required></Input>
                    </FormContainer>
                    <Marginer direction="vertical" margin="1em"/>
                    <SubmitButton type='submit' form="my-form" >Reset Password</SubmitButton>
                    <Marginer direction='vertical' margin="1em"/>
                    <SplLink to="/Login">Sign In</SplLink>
                </BoxContainer>
            </div>
        )
}

export default ForgotPasswordPage
