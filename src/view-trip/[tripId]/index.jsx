/* eslint-disable no-unused-vars */
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InforSection from '../components/InforSection';
import Hotels from '../components/Hotels';


function Viewtrip() {

    const{tripId}=useParams();
    const [trip, setTrip]=useState([]);

    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId])

    const GetTripData=async()=>{

        const docRef=doc(db,"AITripes",tripId);
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document:", docSnap.data());
            setTrip(docSnap.data());
        }else{
            console.log("No such document");
            toast('No trip Found!');
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      <InforSection trip={trip}/>

      <Hotels  trip={trip}/>

    </div>
  )
}

export default Viewtrip
