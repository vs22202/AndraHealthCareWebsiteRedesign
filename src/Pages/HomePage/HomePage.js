import React, {useState, useEffect}  from 'react'
import { flushSync } from 'react-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components'
import asha from '../../pictures/image16.png';
import child from '../../pictures/image19.png';
import hmis from '../../pictures/HMIS.png';
import rbsk from '../../pictures/RBSK.png';
import RKSK from '../../pictures/RKSK.png';
import { Link } from 'react-router-dom';
import { SplLink } from '../../components/Navbar';
import Carousel from 'react-elastic-carousel';
import Item from '../../components/Item';
import './Carousel.css'
import { StyledAlert } from '../../components/Common';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 690, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];
export const Styledhead=styled.h3`
    font-size:${({theme})=>theme.hfontsize};
    color:${({theme})=>theme.scolor};
    padding-bottom:2rem;
`;
export const Styledp=styled.p`
    font-size:${({theme})=>theme.bfontsize};
    display:flex;
    width:50%;
    align-items:center;
    justify-content:center;
    text-align:center;
    flex-wrap:wrap;

`;

export const Imagechangeholder=styled.div`
    display:flex;
    position: relative;
    z-index:1;

`;
export const Dissapeardiv=styled.div`
    display:flex;
    position:absolute;
    text-align:center;
    top:3em;
    left:1.5em;
    width:80%;
    font-size:${prop=>prop.theme.bfontsize};
    color:transparent;
    transition: color 0.3s ease-in 0.2s;
    z-index:-1;
    flex-wrap:wrap;
    ${Imagechangeholder}:hover & {
        color:${prop=>prop.theme.pcolor}; 
        
    }
`;
export const StyledImg=styled.img`
    position:relative;
    padding-bottom:1rem;
    transition: filter 0.2s ease-in;
    width:20.5625rem;
    height:11.375rem;
    z-index:-2;

    ${Imagechangeholder}:hover & {
        filter:brightness(70%) blur(4px);
    }
`;


const HomePage = (props) => {
    const location=useLocation();
    const [displayAlert,setDisplayAlert] = useState(true);
    useEffect(() => {
        const interval = setInterval(()=>{
            setDisplayAlert(false)
        },6000)
        return () => {
            clearInterval(interval);
        }
    },[])
    return (
        <div style={{padding:'0px',margin:'0',display:'flex',flexDirection:'column'}}>
            {location.state && displayAlert && <StyledAlert style={{margin:'auto'}}>{location.state.text}</StyledAlert>}
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',margin:'3rem 0px'}}>
            <Styledhead>About Our Department</Styledhead>
            <Styledp>Health, Medical & Family Welfare Department, Govt of AP, has been serving the 
people of Andhra Pradesh, through 7507 subcenters, 1147 PHC’s 191 CHC’s 34 Aera 
Hospitals,8 District Hospitals and 11 Teaching  Hospitals with bed strength of 33,217. 
Broadly there are 3 categories of services – Primary Health, Secondary Health and Tertiary Health & Medical Education.
</Styledp>
        </div> 
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',margin:'3rem 0px'}}>
        <Styledhead>Andhra Pradesh Health Programs</Styledhead>
        <div style={{width:"85%"}}>
            <Carousel breakPoints={breakPoints}>
                <Item>
                    <Imagechangeholder>
                    <Dissapeardiv>ASHA or Accredited Social Health Activist. is selected from the village itself and will be trained to work as an interface between the community and the public health system.</Dissapeardiv>
                    <StyledImg src={asha}/>
                    </Imagechangeholder>
                    <SplLink to={{pathname:"https://hmfw.ap.gov.in/asha-program.aspx"}} target="_blank" >ASHA</SplLink>
                </Item>
                <Item>
                    <Imagechangeholder>
                    <Dissapeardiv>With a target of more than 95% full immunization to reduce the IMR, Child Health and Immunization strives to contributing in reduction of IMR.</Dissapeardiv>
                    <StyledImg src={child}></StyledImg>
                    </Imagechangeholder>
                    <SplLink to={{pathname:"https://hmfw.ap.gov.in/child-health-immunization.aspx"}} target="_blank">Child Health Immunization</SplLink>
                </Item>            
                <Item>
                    <Imagechangeholder>
                    <Dissapeardiv>With a target of more than 95% full immunization to reduce the IMR, Child Health and Immunization strives to contributing in reduction of IMR.</Dissapeardiv>
                    <StyledImg src={hmis}></StyledImg>

                    </Imagechangeholder>
                    <SplLink to={{pathname:"https://hmfw.ap.gov.in/child-health-immunization.aspx"}} target="_blank">Child Health Immunization</SplLink>
                </Item>            
                <Item>
                    <Imagechangeholder>
                    <Dissapeardiv>With a target of more than 95% full immunization to reduce the IMR, Child Health and Immunization strives to contributing in reduction of IMR.</Dissapeardiv>
                    <StyledImg src={rbsk}></StyledImg>
                    </Imagechangeholder>
                    <SplLink to={{pathname:"https://hmfw.ap.gov.in/child-health-immunization.aspx"}} target="_blank">Child Health Immunization</SplLink>
                </Item>
            </Carousel>
        </div>
        <SplLink to='/Healthcare'>Click For More Information</SplLink>
        </div>
        </div>
    )
}

export default HomePage
