import React from 'react'
import { Link } from 'react-router-dom';
import { SplLink,Splli,Splul,Spli } from './Navbar';
import{Marginer} from './Marginer';
import styled from 'styled-components';

export const NavB= styled.nav`
display:flex;
align-items:center;
justify-content:space-around;
height:5.375rem;
background-color:${props=>props.theme.tcolor};
margin-top:auto;
`;
export const CopyrightContainer=styled.div`
display:flex;
flex-direction:colums;
justify-content:center;
align-items:center;
height:100%
`;


export const BottomNav = () => {
    return (
        <NavB>
            <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Splli style={{fontSize:"16px"}}>
                    Social Presence
                    </Splli>
                    <Splli style={{fontSize:"8px",width:'100%'}}>
                    <ul style={{display:'flex',justifyContent:'space-around',flexBasis:'100%',marginTop:"1rem"}} >
                        <Splli><a href="https://www.facebook.com/" ><i className="fa fa-facebook-square fa-2x" ></i></a></Splli>
                        <Splli><a href="https://www.instagram.com/" ><i className="fa fa-instagram fa-2x" ></i></a></Splli>
                        <Splli><a href="https://www.reddit.com/" ><i className="fa fa-reddit fa-2x" ></i></a></Splli>
                    </ul> 
                    </Splli>
                </ul>

            <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Splli>
                    <Marginer direction="horizontal" margin={50}/>
                    Need Help ?
                    <SplLink to='/Help' style={{marginLeft:"0.5em",padding:"0.3em 0.2em"}}>(faq's)</SplLink> 
                    </Splli>
                    <Splli style={{fontSize:"8px",marginTop:"1rem"}}>
                    <Marginer direction="horizontal" margin={20}/>
                    © ALL COPY RIGHTS RESERVED BY HEALTH, MEDICAL & FAMILY WELFARE DEPARTMENT 2017   
                    </Splli>
                </ul>
                <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Splli style={{fontSize:"16px"}}>
                    Contact US
                    </Splli>
                    <Splli style={{fontSize:"12px",width:'100%'}}>
                    <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',flexBasis:'100%',marginTop:"1rem"}} >
                        {/* <Splli><div  style={{paddingRight:'0.7rem'}}><i className="fa fa-phone-square fa-1x" style={{paddingRight:'0.3rem'}}></i>9940628436</div></Splli> */}
                        <Splli><div><i className="fa fa-at fa-1x" style={{paddingRight:'0.3rem'}} ></i>andhrahelp@gmail.com</div></Splli>
                    </ul> 
                    </Splli>
                </ul>




        </NavB>
    )
}
