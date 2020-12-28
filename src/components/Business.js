import React, {useState, useEffect} from 'react';
import {useAuth} from "../contexts/AuthContext"
import {DataProvider} from "../contexts/Context"
import WineryData from "./WineryData"

export default function Business() {

    // const {currentUser} = useAuth();
    // const uid = currentUser.uid
    // const username = currentUser.displayName
    
    return (
        <>
            <DataProvider>
                <WineryData />  
            </DataProvider>  
        </>
    )
}
