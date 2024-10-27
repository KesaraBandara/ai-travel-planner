/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { Button } from '@/components/ui/button';
// import { GetPlaceDetails } from '@/service/GlobalApi';
// import React, { useEffect } from 'react'
// import { IoIosSend } from "react-icons/io";


// function InforSection({trip}) {

//   useEffect(()=>{
//     trip&&GetPlacePhoto();
//   },[trip])

//   const GetPlacePhoto=async()=>{

//     const data={
//       textQuery:trip?.userSelection?.location?.label
//     }
  
//   const result=await GetPlaceDetails(data).then(resp=>{
//     console.log(resp.data)
//   })
//   }
//   return (
//     <div>
//       <img src='/placeholder1.jpg' className='h-[340px] w-full object-cover rounded-xl' />
//         <div className='flex justify-between items-center'>
//             <div className='my-5 flex flex-col gap-2'>
//                         <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
//                 <div className='flex gap-2'>
//                         <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅 {trip.userSelection?.noOfDays} Day</h2>
//                         <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰 {trip.userSelection?.budget} Budget</h2>
//                         <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>No. Of Traveler {trip.userSelection?.traveler} </h2>   
//                 </div>
//             </div>
//             <Button><IoIosSend /></Button>
//         </div>
//     </div>
//   )
// }

// export default InforSection

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails, GetPlacePhotos } from '@/service/GlobalApi';

function InforSection({ trip }) {
    const [photoUrl, setPhotoUrl] = useState('/placeholder1.jpg');
    const [placeDetails, setPlaceDetails] = useState(null);

    useEffect(() => {
        if (trip?.userSelection?.location) {
            fetchPlaceData();
        }
    }, [trip]);

    // const fetchPlaceData = async () => {
    //     try {
    //         // Ensure the label exists before making API calls
    //         const locationLabel = trip?.userSelection?.location?.label;
    //         if (!locationLabel) return;

    //         // Fetch place details from Nominatim
    //         const placeData = await GetPlaceDetails(locationLabel);
    //         if (placeData) {
    //             setPlaceDetails(placeData);
                
    //             // Fetch photo from Wikimedia using the display name
    //             const photo = await GetPlacePhotos(placeData.display_name);
    //             if (photo) {
    //                 setPhotoUrl(photo);
    //                 console.log("Photo URL:", photo);
    //             }
    //         } else {
    //             console.error("No place details found for the query.");
    //         }
    //     } catch (error) {
    //         console.error("Error fetching place details or photo:", error);
    //     }
    // };

    const fetchPlaceData = async () => {
        try {
            const locationLabel = trip?.userSelection?.location;
            console.log("Location Label:", locationLabel); // Check if location label is available
    
            console.log("hiiiiiiiiiiii");
            if (!locationLabel) {
                console.error("Location label is missing.");
                return;
            }
    
            // Fetch place details from Nominatim
            const placeData = await GetPlaceDetails(locationLabel);
            console.log("Place Details:", placeData); // Log place data after fetching
    
            if (placeData) {
                setPlaceDetails(placeData);
    
                // Fetch photo from Wikimedia using the display name
                const photo = await GetPlacePhotos(placeData.display_name);
                console.log("Photo URL:", photo); // Log the photo URL after fetching
    
                if (photo) {
                    setPhotoUrl(photo);
                } else {
                    console.warn("No photo found for place:", placeData.display_name);
                }
            } else {
                console.warn("No place details found for query:", locationLabel);
            }
        } catch (error) {
            console.error("Error fetching place details or photo:", error);
        }
    };
    
    
//     return (
//         <div>
//             <img src={photoUrl} className='h-[340px] w-full object-cover rounded-xl' alt="Place" />
//             <div className='flex justify-between items-center'>
//                 <div className='my-5 flex flex-col gap-2'>
//                     <h2 className='font-bold text-2xl'>{placeDetails?.display_name || trip?.userSelection?.location}</h2>
//                     <div className='flex gap-2'>
//                         <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//                             📅 {trip?.userSelection?.noOfDays} Day
//                         </h2>
//                         <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//                             💰 {trip?.userSelection?.budget} Budget
//                         </h2>
//                         <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
//                             No. Of Traveler {trip?.userSelection?.traveler}
//                         </h2>
//                     </div>
//                 </div>
//                 <Button><IoIosSend /></Button>
//             </div>
//         </div>
//     );
// }

// export default InforSection;

return (
    <div>
        <img src={photoUrl} className='h-[340px] w-full object-cover rounded-xl' alt="Place" />
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{placeDetails?.display_name || trip?.userSelection?.location}</h2>
                <div className='flex gap-2'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
                        📅 {trip?.userSelection?.noOfDays} Day
                    </h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
                        💰 {trip?.userSelection?.budget} Budget
                    </h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
                        No. Of Traveler {trip?.userSelection?.traveler}
                    </h2>
                </div>
            </div>
            <Button><IoIosSend /></Button>
        </div>
    </div>
);
}

export default InforSection;