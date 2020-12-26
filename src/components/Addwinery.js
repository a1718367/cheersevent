import React, {useState, useRef, useEffect} from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase";
import Winery from "./Winery";




export default function Addwinery() {

    const {currentUser} = useAuth()
    const uid = currentUser.uid
    const winerynameRef = useRef();
    const wineryphoneRef = useRef();
    const wineryemailRef = useRef();
    const wineryaddressRef = useRef();
    const wineryregionRef = useRef();
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")

    const [winery, setwinery] = useState([])
        
    useEffect(() => {
        getwinery(uid)
    }, [])

    async function handleAddWinery(e){
        e.preventDefault()
        const data ={
            uid: uid,
            wineryname: winerynameRef.current.value.trim(),
            wineryphone: wineryphoneRef.current.value.trim(),
            wineryemail: wineryemailRef.current.value.trim(),
            wineryaddress: wineryaddressRef.current.value.trim(),
            wineryregion: wineryregionRef.current.value.trim()
        };

        try {
            setloading(true)
            const res = await db.collection("business").add(data)
            document.getElementById("wineryadd").reset()
            

        } catch (error) {
            seterror(error)
        }
        setloading(false)
        getwinery()
    }


    async function getwinery(){
        const data = await db.collection("business").where("uid", "==", uid).get();
        const fdata = data.docs.map((result)=>{
            return {
                wineryid: result.id,
                wineryname: result.data().wineryname,
                wineryphone: result.data().wineryphone,
                wineryemail: result.data().wineryemail,
                wineryaddress: result.data().wineryaddress,
                wineryregion: result.data().wineryregion
            }
        })
        setwinery(fdata)
        
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Add Your Business</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form id="wineryadd" onSubmit={handleAddWinery}>
                        <Form.Group id="bussname">
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            ref={winerynameRef} 
                            required/>
                        </Form.Group>
                        <Form.Group id="bussphone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                            type="number" 
                            ref={wineryphoneRef} 
                            required/>
                        </Form.Group>
                        <Form.Group id="bussemail">
                            <Form.Label>Business Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            ref={wineryemailRef} 
                            required/>
                        </Form.Group>
                        <Form.Group id="bussaddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                            type="text" 
                            ref={wineryaddressRef} 
                            required/>
                        </Form.Group>
                        <Form.Group id="bussregion">
                            <Form.Label>Business Region</Form.Label>
                            <Form.Control 
                            type="text" 
                            ref={wineryregionRef} 
                            required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Add Business    
                        </Button>                                                                                        
                    </Form>
                </Card.Body>
            </Card>
            <Winery data={winery}></Winery>
        </>
    )
}

    // async function getwinery(){

    //     try {
    //         let userwinery = await db.collection("business").where("uid", "==", uid).get();
    //         for (let uwinery of userwinery.docs){
    //             console.log(uwinery.data(), uwinery.id)
    //             console.log(uwinery.data().wineryname)
    //             // setwinery(data => {
    //             //     return [...data, {wineryname: uwinery.data().wineryname}]
    //             // })
    //         setwinery(winery =>{
    //                 return [...winery, {
    //                     wineryid: uwinery.id,
    //                     wineryname: uwinery.data().wineryname,
    //                     wineryphone: uwinery.data().wineryphone,
    //                     wineryemail: uwinery.data().wineryemail,
    //                     wineryaddress: uwinery.data().wineryaddress,
    //                     wineryregion: uwinery.data().wineryregion
    //                 }]   
    //             })
                
    //         }
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // function getwinery(){
    //     db.collection("business").where("uid", "==", uid)
    //     .get()
    //     .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         console.log(doc.id, " => ", doc.data());
    //         setwinery(winery =>{
    //                 return [...winery, {
    //                     wineryid: doc.id,
    //                     wineryname: doc.data().wineryname,
    //                     wineryphone: doc.data().wineryphone,
    //                     wineryemail: doc.data().wineryemail,
    //                     wineryaddress: doc.data().wineryaddress,
    //                     wineryregion: doc.data().wineryregion
    //                 }]
    //             }) 
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });
    
    // }