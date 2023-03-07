import React, { useRef, useState } from 'react'
import { useHistory,Redirect } from 'react-router'
import { Styledhead } from '../Pages/HomePage/HomePage'
import { Input } from './Common'
import { Marginer } from './Marginer'
import { CusSubButton } from './SearchWithDropDown'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext';
const AppointmentForm = ({title,disabled}) => {
    const history=useHistory();
    const {currentUser} = useAuth();
    var today = new Date().toISOString().split('T')[0];
    const [date,setDate]=useState(today)
    const reasonRef = useRef();
    const timeSlotRef = useRef();
    const dateRef = useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        //backend stuff

        db.collection("userDetails").doc(currentUser.email).collection("Appointments").doc(new Date().toString()).set(
            {
                reason:reasonRef.current.value,
                timeSlot:timeSlotRef.current.value,
                date: dateRef.current.value,
                location:title
            }
        )
        history.push({pathname:"/",state:{text:'Appointment made Successfully'}});
    }
    return (
        <form id="Actual_from" onSubmit={handleSubmit} disabled={disabled && disabled || ""}>
            <Styledhead style={{fontSize:'24px'}}>{title}</Styledhead>
            <Input type='text' placeholder='reason for appointment' ref={reasonRef} required/>
            <Input list="timeSlots" name="timeSlot" id="timeSlot" placeholder='Choose Preferred Time slot' ref={timeSlotRef} required/>
                <datalist id="timeSlots">
                    <option value="9AM-10AM"/>
                    <option value="10AM-11AM"/>
                    <option value="11AM-12PM"/>
                    <option value="1PM-2PM"/>
                    <option value="2PM-3PM"/>
                    <option value="3PM-4PM"/>
                </datalist>
            <Input type='date' ref={dateRef} min={date} required />
            <Marginer direction="vertical"  margin={17}/>
            <CusSubButton type='submit' form="Actual_from" disabled={disabled && disabled || ""}>Make Appointment</CusSubButton>
        </form>
    )
}

export default AppointmentForm
