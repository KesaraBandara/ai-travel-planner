/* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from 'react'

import PlaceCardItem from "./PlaceCardItem";

// function PlacesToVisit({trip}) {

//     console.log(trip);

//   return (
//     <div>
//         <h2 className='font-bold text-lg'>Places to Visit</h2>

//         <div>
//             {trip?.tripData?.itinerary?.map((item,index) => (
//                 <div>
//                     <h2 className='font-medium text-lg'>{item.day}</h2>
//                     {item.plan.map((place,index) => (
//                       <div>
//                         <h2>{place.placeName}</h2>
//                         </div>
                      
//                      ))}
//                 </div>
//             ))}
//         </div>
      
//     </div>
//   )
// }

// export default PlacesToVisit

function PlacesToVisit({ trip }) {
  console.log(trip);

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div>
        {Array.isArray(trip?.tripData?.itinerary) ? (
          trip?.tripData?.itinerary.map((item, index) => (
            <div className="mt-5"  key={index}>
              <h2 className="font-medium text-lg">Day {item.day}</h2>
              <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, index) => (
                <div className='my-3' key={index}>
                  <h2 className="font-medium text-lg text-sm text-orange-600">{place.time}</h2>
                  {/* <h2>{place.placeName}</h2> */}
                  <PlaceCardItem place={place} />
                </div>
              ))}
              </div>
              </div>
            
          ))
        ) : (
          <p>No itinerary available or incorrect data format.</p>
        )}
      </div>
    </div>
  );
}

export default PlacesToVisit;
