import React ,{useState,useEffect} from 'react';
import MarkDown from 'markdown-to-jsx';
import styled from 'styled-components';
import { Styledhead } from '../../../HomePage/HomePage';
export const StyledMarkUpDiv=styled.div`
margin:0;
padding:0;
`;

const GeneralPage = () => {
    const file_name = 'Lorem.md';
    const [post,setPost]=useState('');
    useEffect(()=>{
        import('../../../MarkDownFiles/Lorem.md')
                .then(res=>{fetch(res.default)
                                .then(res=>res.text())
                                .then(res=>setPost(res));
                })
                .catch(err=>console.log(err));
    });
    return (
        <div>
            
        <div style={{display:'flex',width:"75%",color:"black",flexDirection:'column',paddingLeft:"28em",paddingTop:"3em",paddingBottom:"3em",justifyContent:'center',alignItems:'center'}}>
        <h4 style={{paddingBottom:"1em",textAlign:'center'}}>ASHA Program in the state of Andhra Pradesh under NHM</h4>
            <MarkDown options={{
                                overrides:{
                                    div:{
                                        component: StyledMarkUpDiv,
                                    },
                                    h3:{
                                        component:Styledhead,
                                    }
                                    
                                }
            }}>{post}</MarkDown>
        </div>
        </div>
    )
}

export default GeneralPage
