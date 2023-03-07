import { Modal } from "@mui/material";
import AppointmentModal from "../../components/AppointmentModal";
import { useState } from "react";
import { Button } from "@mui/material";
import { useTheme } from "styled-components";
import { CusSubButton, FlexBox } from "../../components/SearchWithDropDown";
import { Marginer } from "../../components/Marginer";
import Appointment from '../../pictures/appointment.png';
import AppointmentForm from "../../components/AppointmentForm";
import { Imagechangeholder,Dissapeardiv,StyledImg } from "../HomePage/HomePage";
import DAppoint from '../../pictures/DAppoint.jpeg'
import VAppoint from '../../pictures/VAppoint.jpeg'
const RegisterPage=()=>{
    const [modalOpen,setModalOpen]=useState(false);
    const [formType,setFormType]=useState("");
    const theme=useTheme();
    const handleModalClose=()=>{
        setModalOpen(false)
    }
    return(
        <FlexBox style={{flexWrap:'no-wrap',flexBasis:'100%'}}>
        <FlexBox fdirec='column' style={{flexWrap:'wrap'}} onClick={(e)=>{setFormType("doctor");setModalOpen(true);}}>
        <Marginer direction='vertical' margin={17}/>
        <Button  style={{color:theme.scolor}}>Doctor Appointments </Button>
        <Imagechangeholder>
                    <Dissapeardiv><p style={{fontSize:'18px'}}>Find a government hospital in your city and make an appointment today</p></Dissapeardiv>
                    <StyledImg src={DAppoint}/>
        </Imagechangeholder>
        <CusSubButton>Make An Appointment Today</CusSubButton>
        {/* <AppointmentModal disabled="disabled">
        <AppointmentForm disabled="disabled"/>
        </AppointmentModal> */}
        </FlexBox>
        <FlexBox fdirec='column' style={{flexWrap:'wrap'}} onClick={()=>{setFormType("vaccine");setModalOpen(true)}}>
        <Marginer direction='vertical' margin={17}/>
        <Button  style={{color:theme.scolor}}>Vaccination Appointments </Button>
        <Imagechangeholder>
                    <Dissapeardiv><p style={{fontSize:'18px'}}>Find a government hospital in your city and get vaccinated today </p></Dissapeardiv>
                    <StyledImg src={VAppoint}/>
        </Imagechangeholder>
        <CusSubButton>Make An Appointment Today</CusSubButton>
        {/* <AppointmentModal disabled="disabled">
        <AppointmentForm disabled="disabled"/>
        </AppointmentModal> */}
        </FlexBox>
        <Modal
        open={modalOpen}
        onClose={handleModalClose}
       >
           <AppointmentModal handleModalClose={handleModalClose} formType={formType}/>
        </Modal>
    </FlexBox>
    )
    }
    export default RegisterPage;
    