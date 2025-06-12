/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect,useState } from 'react'
import { useNavigation } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';



function MyTrips() {

  const navigation=useNavigation();
  const [userTrips,setUserTrips]=useState([]);

    useEffect(() => {
      GetUserTrips();
    },[])

    const GetUserTrips=async()=>{
      const user=JSON.parse(localStorage.getItem('user'));
      if(!user)
      {
        navigation('/')
        return;
      }
      setUserTrips([]);
      const q=query(collection(db,'AITripes'),where('userEmail','==',user?.email));
      const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setUserTrips(prevVal=>[...prevVal,doc.data()]);
        });

    }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>my trips</h2>

      <div>
        {userTrips.map((trip, index) => (
          console.log("trip"),
          <UserTripCardItem trip={trip}/>
        ))}
      </div>
    </div>
  )
}

export default MyTrips
