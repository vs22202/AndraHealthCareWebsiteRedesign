import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { useTheme } from 'styled-components';
import AppointmentForm from '../../../components/AppointmentForm';
import { Marginer } from '../../../components/Marginer';
import SearchWithDropDown, { CusSubButton, FlexBox } from '../../../components/SearchWithDropDown'
import { Styledhead } from '../../HomePage/HomePage';
import BenifitForm from '../../../components/BenifitForm';
import './BenifitPage.css'
import StyledIcon from '../../../components/AppointmentModal';
import { StyledAlert } from '../../../components/Common';

const BenifitPage = () => {
    const [searchScheme,setSearchScheme]=useState({})
    const [modalOpen,setModalOpen]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const [formDisplay,setFormDisplay]=useState(false)
    const [loading,setLoading]=useState(false)
    const theme = useTheme();
    const benifitSchemes =[{
        title:'Indira Gandhi National Old Age Pension Scheme',
        about:'The scheme is implemented as part of the National Social Assistance Program (NSAP) of the Ministry of Rural Development, Government of India. It is a non-contributory scheme and provides a monthly income for citizens or to refugees above 60 years, who have no other source of income.',
        eligibility:'<ul><li>Age : 60 years and above</li><li>Should be Below Poverty Line (BPL).</li></ul>',
        benifits:'A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.'

    },
    {
        title:'Lokprasar Prakalpo',
        about:'To revive and showcase the different folk music forms of Bengal, Lok Prasar Prakalpa is being implemented in West Bengal.',
        eligibility:'<ul><li>Senior artistes, who are above 60</li></ul>',
        benifits:'Under this project, Senior artistes, who are above 60 receive Rs.1000/- per month as Pension. Apart from this, the active performances receive Rs.1000/- as Performance fee per programme.  All these are credited to the bank accounts of the folk artistes directly. Photo identity cards have also been issued to majority of the enlisted folk artistes'
    },    
    {
        title:'Senior Citizen Saving Scheme',
        about:'Senior Citizen Saving Scheme is an an ideal scheme for senior citizens and for those who have retired either from service, to provide security in old age.',
        eligibility:'<ul><li>An individual who has attained the age of 60 year or above on the date of opening of an account or an individual who has attained the age of 55 years or more but less than 60 years and has retired under superannuation or otherwise.</li><li>A retired Personnel of Defence Services (Excluding Civilian Defence Employees), who has attained the age of 50 years can also subscribe to the scheme subject to fulfilment of other specified conditions</li><li>A depositor may open an account individually or jointly with spouse</li></ul>',
        benifits:'Interest shall be payable from the date of deposit to 31st march/ 30th June/ 30th September/ 31st December on 1st working day of April/July/October/January as the case may be, in the first instance and thereafter, interest shall be payable on 1st working day of April/July/October/January on quarterly basis. '
    },
    ];

    const handleTextChange = (e)=>{
        const searchTerm = e.target.value;
        const toDisplay =[]
        benifitSchemes.forEach((Scheme,index)=>{
            Scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ? toDisplay.push(Scheme.title) : console.log(index);
        })
        return toDisplay
    }
    const getSearchValue = (txt)=>{

    const temp= benifitSchemes.filter((val,i)=>{
            return val.title.toLowerCase()==txt.toLowerCase()
        });  
        console.log(searchScheme,'hell')
        if(temp.length !== 0){
            setSearchScheme(temp[0]);
            setModalOpen(true)
            setErrorMessage("");
        }
        else{
            setErrorMessage("Choose A Valid Scheme");
        }
    }
    const handleClick = (e)=>{
        e.preventDefault();
        setFormDisplay(true);
        setLoading(true)
        setTimeout(function() {
            document.getElementById('modal').scrollBy({top:300,left:0,behavior:'smooth'});
          }, 100);
        
    }
    const handleModalClose=()=>{setModalOpen(false);setLoading(false);setFormDisplay(false);}
    return (
        <div>
            {errorMessage !== "" && <StyledAlert variant='danger' style={{margin:'auto'}}>{errorMessage}</StyledAlert>}
            <SearchWithDropDown handleTextChange={handleTextChange} searchGoal='Benifit Schemes' sendSearchValue={getSearchValue}/>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
            >
            <FlexBox style={{width:'70%',height:"100%",margin:'0 auto'}}>
                <div id='modal' style={{background:theme.pcolor,width:'max-content',maxHeight:'500px',padding:'3em 2em',overflowY:'scroll'}}>
                    <Styledhead>{searchScheme.title}</Styledhead>
                    <h3 className='header'>About</h3>
                    <p className='para'>{searchScheme.about}</p>
                    <h3 className='header'>Eligibility</h3>
                    <p className='para' dangerouslySetInnerHTML={{__html:searchScheme.eligibility}}></p>
                    <h3 className='header'>Benifits</h3>
                    <p className='para'>{searchScheme.benifits}</p>
                    <CusSubButton className='sub-btn' onClick={handleClick} disabled={loading}>Register</CusSubButton>
                    {formDisplay && <BenifitForm title={searchScheme.title}/>}
                </div>
            </FlexBox>
            </Modal>
        </div>
    )
}

export default BenifitPage
