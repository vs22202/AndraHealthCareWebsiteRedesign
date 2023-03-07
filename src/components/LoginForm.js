import { BoldLink, BoxContainer,FormContainer, Input, MutedLink, SubmitButton, StyledAlert } from './Common'
import {Marginer} from './Marginer'
import React, { useContext ,useRef,useState} from 'react'
import { AccountContext } from './accontContext';
import { useAuth  } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
const LoginForm = (props) => {
    const {switchToSignUp} = useContext(AccountContext);
    const emailRef=useRef()
    const passwordRef=useRef()
    const {login} =useAuth()
    const [error,setError]=useState('');
    const [loading,setLoading]=useState('');
    const history=useHistory();
    const [passTog2,setPassTog2]=useState(false);

    async function handleSubmit(e){
        e.preventDefault()

        try{
        setError('')
        setLoading(true)
        await login(emailRef.current.value,passwordRef.current.value)
        console.log(props.prevPath);
        history.push(props.prevPath|| "/")
        }
        catch(err){
            setError(err.code.slice(5))
        }
        setLoading(false)
    }
    return (
            <BoxContainer>
                {error && <StyledAlert variant="danger">{error}</StyledAlert>}
                <FormContainer id="my-form" onSubmit={handleSubmit}>
                    <Input type='email' placeholder='Email' ref={emailRef} required></Input>
                    <div style={{position:'relative'}}>
                        <Input type={(passTog2 && 'text' )|| 'password'} placeholder='Password' ref={passwordRef} required></Input>
                        {passTog2 && <i style={{display:'inline-block', position:'absolute',right:'5%', top:'25%'}} className='fa fa-eye' onClick ={() =>{setPassTog2(!passTog2)}}></i>}
                        {!passTog2 && <i  style={{display:'inline-block', position:'absolute',right:'5%', top:'25%'}} className='fa fa-eye-slash' onClick ={() =>{setPassTog2(!passTog2)}}></i>}  
                    </div>
                </FormContainer>
                <Marginer direction="vertical" margin={5}/>
                <MutedLink to="/Forgot-password">Forgot your password?</MutedLink>
                <Marginer direction="vertical" margin={7}/>
                <SubmitButton type='submit' form="my-form" disabled={loading} >SignIn</SubmitButton>
                <Marginer direction='vertical' margin="1em"/>
                <MutedLink to="/Login">Dont have an account?<BoldLink href="/Login" onClick={switchToSignUp}>SignUp</BoldLink></MutedLink>
            </BoxContainer>
    )
}

export default LoginForm
