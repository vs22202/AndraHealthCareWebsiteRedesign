import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import { Styledhead } from '../Pages/HomePage/HomePage'
import { Input } from './Common'
import { Marginer } from './Marginer'
import { CusSubButton } from './SearchWithDropDown'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext';
import { height } from '@mui/system'
const AppointmentForm = ({title,disabled}) => {
    const history=useHistory();

    const {currentUser} = useAuth();
    const ageRef = useRef();
    const genderRef = useRef();     
    const stateRef = useRef();     
    const cityRef = useRef();     
    const timeSlotRef = useRef();
    const dateRef = useRef();
    const cities=["Adoni","Amalapuram","Anakapalle","Anantapur","Bapatla","Bheemunipatnam","Bhimavaram","Bobbili","Chilakaluripet","Chirala","Chittoor","Dharmavaram","Eluru","Gooty","Gudivada","Gudur","Guntakal","Guntur","Hindupur","Jaggaiahpet","Jammalamadugu","Kadapa","Kadiri","Kakinada","Kandukur","Kavali","Kovvur","Kurnool","Macherla","Machilipatnam","Madanapalle","Mandapeta","Markapur","Nagari","Naidupet","Nandyal","Narasapuram","Narasaraopet","Narsipatnam","Nellore","Nidadavole","Nuzvid","Ongole","Palacole","Palasa Kasibugga","Parvathipuram","Pedana","Peddapuram","Pithapuram","Ponnur","Proddatur","Punganur","Puttur","Rajahmundry","Rajam","Rajampet","Ramachandrapuram","Rayachoti","Rayadurg","Renigunta","Repalle","Salur","Samalkot","Sattenapalle","Srikakulam","Srikalahasti","Srisailam Project (Right Flank Colony) Township","Sullurpeta","Tadepalligudem","Tadpatri","Tanuku","Tenali","Tirupati","Tiruvuru","Tuni","Uravakonda","Venkatagiri","Vijayawada","Vinukonda","Visakhapatnam","Vizianagaram","Yemmiganur","Yerraguntla"];
    const handleSubmit=(e)=>{
        e.preventDefault();
        //backend stuff

        db.collection("userDetails").doc(currentUser.email).collection("Benifit_Schemes").doc(new Date().toString()).set(
            {
                state:stateRef.current.value,
                city:cityRef.current.value,
                age: ageRef.current.value,
                gender:genderRef.current.value,
                scheme:title
            }
        )
        history.push({pathname:"/",state:{text:'Registration Done Successfully'}});
    }
    return (
        <form id="Actual_from" onSubmit={handleSubmit} disabled={disabled && disabled || ""}>
            <Styledhead style={{fontSize:'24px'}}>{title}</Styledhead>
            <Input type='text' placeholder='State' value='Andra Pradesh' disabled={true} ref={stateRef} required/>
            <Input list='cities' placeholder='City' ref={cityRef} required/>
            <datalist id='cities'>
                {cities.map((city,i)=>{
                    return <option value={city}/>
                })}
            </datalist>
            <Input type='number' placeholder='Age' ref={ageRef} min={60} required/>
            <Input list='gender' placeholder='Gender' ref={genderRef} required/>
            <datalist id='gender'>
                <option value='Male'/>
                <option value='Female'/>
            </datalist>
            <p style={{marginTop:'2em',marginBottom:'1em',fontSize:'12px',color:'grey'}}>Files need to be of type pdf</p>
            <label for='birth_certificate' > Birth Certificate: </label>
            <input type='file' accept="application/pdf" id='birth_certificate' name='birth_certificate' required />
            <label for='annual_income'> Annual Income Certificate: </label>
            <input type='file' accept="application/pdf" id='annual_income' name='annual_income' required/>
            <Marginer direction="vertical" margin={17}/>
            <CusSubButton type='submit' form="Actual_from" disabled={disabled && disabled || ""}>Submit</CusSubButton>
        </form>
    )
}

export default AppointmentForm
