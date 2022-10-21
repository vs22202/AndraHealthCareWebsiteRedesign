import React, { createContext, useEffect, useState,useContext } from 'react'
import { auth, db} from '../firebase'

const AuthContext = createContext()
export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    const [currentUser,setCurrentuser]= useState()
    const [loading,setLoading]= useState(true)
    const [userDetails,setUserDetails] =useState({})
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        return auth.signOut()
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    function updateEmail(email){
        return currentUser.updateEmail(email)
    }    
    function updatePassword(password){
        return currentUser.updatePassword(password)     
    }
    async function getUserDetails(){
        try{
        await db.collection('userDetails').doc(currentUser.email).get().then((doc)=>{
            setUserDetails({
                'name':doc.data().name,
        });
        console.log(userDetails.name,doc.data().name);
        });
    }
    catch(e){
        console.log(e);
    }
      
      }
    async function updateUserDetails(email,column,value){
        try {
            await db.collection("userDetails").where("email","==",email).get().then((qsnap)=>{
                qsnap.forEach((doc)=>{
                    db.collection("userDetails").doc(doc.id).update({
                        [column]:value
                    })               
                })
            })
        }
        catch(e){
        }
        getUserDetails();
    }
    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged(user=>{
            setCurrentuser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    const value={
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        getUserDetails,
        userDetails,
        updateUserDetails
    }
    return (
        <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    )
}
