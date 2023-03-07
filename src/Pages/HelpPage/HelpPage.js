import React ,{useContext} from 'react'
import styled ,{ThemeContext} from 'styled-components'
import { Splul} from '../../components/Navbar'
import { Styledhead } from '../HomePage/HomePage';
const StyledLi =styled.li`
    display:flex;
    flex-direction:column;
    text-decoration:none;
    height:100%;    
    width:100%;
    text-align:left;
    gap:0.5rem;
    padding:1em;
    border:1px solid ${props=>props.theme.scolor};
    border-radius:20px;  
    margin:auto;
    h6{
        font-size:1.25rem;
    }
    p{
        font-size:1.25rem;
    }
`;
const FaqContainer=styled.div`
    width:90%;
    margin:0 auto;
    margin-block:3em;
    display:flex;
    flex-direction:column;
    align-items:center;

`;
const StyledUl = styled(Splul)`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:3em;
    border:1px solid ${props=>props.theme.scolor};
    border-radius:40px;
    padding:4em ;
    align-items:stretch;
    @media(max-width:768px){
        grid-template-columns:1fr;
    }
`;
const HelpPage = () => {
    const themecontext = useContext(ThemeContext);
    return (
        <FaqContainer>
            <Styledhead>Frequently Asked Questions(Faq's)<br/>Regarding Accessing Website</Styledhead>
            <StyledUl style={{}}>
                <StyledLi>
                    <h6>1)How can I make a doctor appointment?</h6>
                    <p>
                    Click on the information tab present in the homepage and select appointments and then choose make a appointment today. 
                    <br/>Select your city, hospital and mention the reason for the appointment and your preferred time slot with the date. 
                    <br/>Finally click on make an appointment and your doctor appointment is made.
                    </p>
                </StyledLi>                
                <StyledLi>
                    <h6>2)How to register for a benefit scheme?</h6>
                    <p>Under the information section present on the homepage, click on the benefit schemes.<br/>Select the required benefit scheme and then click on the register button and fill your details, then upload your birth certificate and annual income certificate and your registration will be done.</p>

                </StyledLi>                
                <StyledLi>
                    <h6>3)How to sign up or create an account on the website?</h6>
                    <p>In the homepage there will be an option “sign/signup”.<br/>
                        On clicking on that option you will be directed to the sign in page ,where you can see the sign up option .<br/>
                        On clicking on sign up option you will be directed to sign up page,and after entering the required information you can create an account.<br/></p>
                </StyledLi>                
                <StyledLi>
                    <h6>4)How can I update my profile?</h6>
                    <p>If you are signed in to the account ,you can see the username on the homepage,on clicking on your user name you will be directed to the profile page where you can update your profile on clicking the pencil icon.</p>
                </StyledLi>                
                <StyledLi>
                    <h6>5)where can I access the list of appointments that are made by me?</h6>
                    <p>You can access them in “Your Profile” page.</p>
                </StyledLi>                
            </StyledUl>
            <Styledhead>Regarding Schemes and appointments</Styledhead>
            <StyledUl style={{}}>
                <StyledLi>
                    <h6>Q1. Are children only under the age of 5 are eligible for Child Health Immunization?</h6>
                    <p>Yes, all children under the age of 5 are eligible for Child Health Immunization.</p>
                </StyledLi>                
                <StyledLi>
                    <h6>Q2. What are the benefits under</h6>
                    <p>One of its significantly used benefits is the cashless medical treatment in government hospitals of the state. The authorities of the scheme have started issuing the Aarogyasri card to the beneficiaries, further allowing seamless management of the scheme.</p>

                </StyledLi>                
                <StyledLi>
                    <h6>Q3.What are the diseases covered under aarogyasri?</h6>
                    <p>Serious diseases affecting Heart, Kidney, Cancer, Brain, Burns, and accident cases, etc., are covered under the scheme.</p>
                </StyledLi>                
                <StyledLi>
                    <h6>Q4.Will my records be shared with other doctors or health facilities without my permission?</h6>
                    <p>No, your records will be shared with the doctor or health facility only after your consent. In your consent, you can customize and edit the permissions in terms of duration, type of records visible.</p>
                </StyledLi>                
                <StyledLi>
                    <h6>Q5. Is enrolling in ASHA scheme compulsory?</h6>
                    <p>No. Participating in ASHA is completely voluntary.</p>
                </StyledLi>                
                <StyledLi>
                    <h6>Q6.Is it free to register in any program?</h6>
                    <p>Yes, it is absolutely free to register in a particular program if you are eligible.</p>
                </StyledLi>
            </StyledUl>
         </FaqContainer>    
    )
}

export default HelpPage
