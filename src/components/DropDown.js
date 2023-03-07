import react,{useState} from "react";
import { SplLink } from "./Navbar";
import styled from 'styled-components';
export const Dropdown1=styled.ul`
background:${prop=>prop.theme.pcolor};
position: absolute;
top:2em;
left:0px;
list-style: none;
text-align: start;
`;
const MenuItems=[
    {
        title:"Healthcare",
        path:"/Healthcare"
    },
    {
        title:"Appointment",
        path:"/Appointment"
    },
    {
        title:"Benifit Schemes",
        path:"/Benifit"
    },

]
export const Dropdown=()=>{
    const [click,setClick]=useState("false")
    const handleClick=()=>{
        setClick(!click);
    }
    return(
        <>
        <Dropdown1        
        onClick={handleClick}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <SplLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </SplLink>
            </li>
          );
        })}
      </Dropdown1>
    </>
  );
}
 


