import React, {useContext, useState, useEffect} from 'react';
import {useAuth} from "./AuthContext";
import {db} from "../firebase";

const DataContext = React.createContext();


export function useData(){
    return useContext(DataContext)
}


export function DataProvider({children}) {

const {currentUser} = useAuth();
const [userid, setuserid] = useState(currentUser.uid)

const [info, setinfo] = useState()


useEffect(() => {
    console.log(userid)
    getuserdata(userid)
}, [])

function getuserdata(id){
    // db.collection("userinfo").where("uid", "==", id).get()
    // .then((res)=>{
    //     res.forEach(element => {
    //        console.log(element.data()) 
    //     });
    // })
    console.log("boo")
    db.collection("userinfo").where("uid", "==", id).get()
    .then((res)=>{
        res.forEach(el =>{
            setinfo(el.data().username)
        })
    }).catch ((error)=>{
        console.log(error)
    })
}


    function getwinery(uid){
        return db.collection("business").where("uid", "==", uid).get();    
    }
    


    const value ={
        getwinery,
        info
    }

    return (
        <DataContext.Provider value ={value}>
            {children}
        </DataContext.Provider>
    )
}
