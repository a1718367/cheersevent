import React, {useEffect, useState} from 'react'
import {useData} from '../contexts/Context'
import Winery from './Winery'
import {useAuth} from "../contexts/AuthContext"

export default function WineryData() {
    const {currentUser} = useAuth()
    const uid = currentUser.uid
    const username = currentUser.displayName
    const {getwinery, info }=useData();
    const [winerydata, setwinerydata] = useState()

    useEffect(() => {
        getdata(uid)
        console.log(info)
    }, [])

    function get(uid){
        getwinery(uid)
        .then((result)=>{
            result.forEach(element => {
                console.log(element.id, element.data())
            });
        })
        
    }

    async function getdata(uid){
        const res = await getwinery(uid)
        const fres = res.docs.map((result)=>{
            return {
                wineryid: result.id,
                wineryname: result.data().wineryname
            }
        })
        setwinerydata(fres)
        res.forEach(element => {
            console.log(element.data())
        });

    }
    
    return (
        <div>
            <h2> {username}'s Winery</h2>
            {winerydata? 
        <Winery data={winerydata} />
        : <div></div>
        }
            
        </div>
    )
}
