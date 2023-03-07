import React from 'react'
import { Styledhead, StyledImg, Dissapeardiv , Imagechangeholder } from '../../HomePage/HomePage'
import asha from '../../../pictures/image16.png';
import child from '../../../pictures/image19.png';
import doctor from '../../../pictures/doctor.jpeg';
import surgeon from '../../../pictures/surgeon.jpeg';
import { SplLink } from '../../../components/Navbar';
import styled from 'styled-components';
import Item from '../../../components/Item';
import Carousel from 'react-elastic-carousel';
import '../../HomePage/Carousel.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1},
    { width: 690, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];

const Separator= styled.div`
width:60%;
height:0.1rem;
background:${props=>props.theme.scolor};
opacity:0.5;
transition: height 0.2s ease-in-out;
margin-bottom:2rem;
&:hover{
    height:0.2rem;
}
`;
const Styleda=styled.a`
color: ${props=>props.theme.pcolor};
position:relative;
display:flex;
flex-direction:row;
margin:1.5em;
align-items:center;
justify-content:center;
text-align:center;
height:100%;
font-size:16px;
text-decoration: none;
opacity:0;
padding: 0.5em 1em;
transition: all 0.25s ease-in;
&::after{
    content:''
}
${Imagechangeholder}:hover &{
    opacity:100;
    color:${props=>props.theme.pcolor};
    text-decoration:underline;
}

`;
const HealthCarePage = () => {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',margin:'3rem 0px'}}>
                <Styledhead>General Health Information</Styledhead>
                <div style={{width:"85%"}}>
                    <Carousel breakPoints={breakPoints}>    
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'1.25em'}}>The Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition Of Sex Selection) Act​ (PCPNDT) is a statute enacted to stop the female feticide that has resulted in declining female sex ratio in India.</Dissapeardiv>
                            <StyledImg src={asha}/>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">PCPNDT ACT</SplLink>
                        </Item>
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'0.75em'}}>National Quality Assurance Standards have been developed keeping in the specific requirements for public health facilities as well global best practices. NQAS are currently available for District Hospitals, CHCs, PHCs and Urban PHCs.</Dissapeardiv>
                            <StyledImg src={child}></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">NQAS</SplLink>
                        </Item>                            
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'0.75em'}}>National Quality Assurance Standards have been developed keeping in the specific requirements for public health facilities as well global best practices. NQAS are currently available for District Hospitals, CHCs, PHCs and Urban PHCs.</Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=1/300x176"></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">NQAS</SplLink>
                        </Item>                            
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'0.75em'}}>National Quality Assurance Standards have been developed keeping in the specific requirements for public health facilities as well global best practices. NQAS are currently available for District Hospitals, CHCs, PHCs and Urban PHCs.</Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=2/300x176"></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">NQAS</SplLink>
                        </Item>
                    </Carousel> 
                </div>
                <SplLink to='/Benifit' style={{marginBottom:"1rem"}}>Click Here To Register</SplLink>
                <Separator/>
                <Styledhead> Expert Health Information</Styledhead>
                <h3 style={{fontWeight:"300"}}> Circulars</h3>
                <div style={{width:"85%",textAlign:'center'}}>
                    <Carousel breakPoints={breakPoints}>   
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'2em'}}><Styleda href="https://hmfw.ap.gov.in/">Recruitment of Doctors in Telemedeicine Hub</Styleda></Dissapeardiv>
                            <StyledImg src={doctor} style={{paddingRight:'2rem'}}/>
                            </Imagechangeholder>
                            <SplLink to='/Healthcare/General'>Doctor Recruitments</SplLink>
                        </Item>
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'1em'}}><Styleda href='https://hmfw.ap.gov.in/'> Online Application for Civil Assistant Surgeons-2021 Recruitment, DPH&FW,AP</Styleda></Dissapeardiv>
                            <StyledImg src={surgeon}></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">Surgeon Recruitments</SplLink>
                        </Item>                        
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'1em'}}><Styleda href='https://hmfw.ap.gov.in/'> Online Application for Civil Assistant Surgeons-2021 Recruitment, DPH&FW,AP</Styleda></Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=3/300x176"></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">Surgeon Recruitments</SplLink>
                        </Item>                        
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'1em'}}><Styleda href='https://hmfw.ap.gov.in/'> Online Application for Civil Assistant Surgeons-2021 Recruitment, DPH&FW,AP</Styleda></Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=5/300x176"></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">Surgeon Recruitments</SplLink>
                        </Item>
                    </Carousel>
                    <h3 style={{marginTop:"2rem",fontWeight:"300"}}>Publications</h3>
                    <Carousel breakPoints={breakPoints}>   
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'2em'}}><Styleda href="https://hmfw.ap.gov.in/">Recruitment of Doctors in Telemedeicine Hub</Styleda></Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=37/300x176" style={{paddingRight:'2rem'}}/>
                            </Imagechangeholder>
                            <SplLink to='/Healthcare/General'>Doctor Recruitments</SplLink>
                        </Item>
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'1em'}}><Styleda href='https://hmfw.ap.gov.in/'> Online Application for Civil Assistant Surgeons-2021 Recruitment, DPH&FW,AP</Styleda></Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=30/300x176"></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">Surgeon Recruitments</SplLink>
                        </Item>                        
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'1em'}}><Styleda href='https://hmfw.ap.gov.in/'> Online Application for Civil Assistant Surgeons-2021 Recruitment, DPH&FW,AP</Styleda></Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=10/300x176"></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">Surgeon Recruitments</SplLink>
                        </Item>                        
                        <Item>
                            <Imagechangeholder>
                            <Dissapeardiv style={{top:'1em'}}><Styleda href='https://hmfw.ap.gov.in/'> Online Application for Civil Assistant Surgeons-2021 Recruitment, DPH&FW,AP</Styleda></Dissapeardiv>
                            <StyledImg src="https://source.unsplash.com/random?sig=24/300x176"></StyledImg>
                            </Imagechangeholder>
                            <SplLink to="/Healthcare/General">Surgeon Recruitments</SplLink>
                        </Item>
                    </Carousel>
                </div>
                <SplLink to={{pathname:"https://apdmhoksn.attendance.gov.in/"}} target="_blank">Click Here For More Publications</SplLink>
            
        </div>
    )
}

export default HealthCarePage
