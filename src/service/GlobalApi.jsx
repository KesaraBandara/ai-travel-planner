// /* eslint-disable no-undef */

// /* eslint-disable no-unused-vars */
// import axios from 'axios'
// const BASE_URL = 'https://places.googleapis.com/v1/places:searchText'
// // https://places.googleapis.com/v1/places:searchText

// const config={
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_API_KEY,
//         'X-Goog-FieldMask':[
//             'places.photos',
//             'places.displayName',
//             'places.id'
//         ]
//     }}

//     export const GetPlaceDetails=(data)=>axios.post(BASE_URL,data,config)

// import axios from 'axios';

// // Function to get place details using OpenStreetMap Nominatim API
// export const GetPlaceDetails = async (query) => {
//     const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
//         params: {
//             q: query,
//             format: 'json',
//             limit: 1,
//         }
//     });
//     return response.data[0]; // Return the first result
// };


// export const GetPlacePhotos = async (query) => {
//     const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
//         params: {
//             action: 'query',
//             prop: 'pageimages',
//             format: 'json',
//             piprop: 'original',
//             titles: query,
//             origin: '*',
//         }
//     });

//     const pages = response.data.query.pages;
//     for (let pageId in pages) {
//         if (pages[pageId].original) {
//             return pages[pageId].original.source; // URL of the photo
//         }
//     }
//     return null; // Return null if no photo found
// };


import axios from 'axios';

// Function to get place details using OpenStreetMap Nominatim API
export const GetPlaceDetails = async (query) => {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
            params: {
                q: query,
                format: 'json',
                limit: 1,
            }
        });
        console.log("Nominatim Response:", response.data); // Log full response data
        return response.data[0]; // Return the first result
    } catch (error) {
        console.error("Error fetching place details:", error); // Log any error details
        return null;
    }
};

export const GetPlacePhotos = async (query) => {
    try {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
            params: {
                action: 'query',
                prop: 'pageimages',
                format: 'json',
                piprop: 'original',
                titles: query,
                origin: '*',
            }
        });
        console.log("Wikimedia Response:", response.data); // Log full response data

        const pages = response.data.query.pages;
        for (let pageId in pages) {
            if (pages[pageId].original) {
                return pages[pageId].original.source; // URL of the photo
            }
        }
        console.warn("No photo found in Wikimedia response."); // Warning if no photo
        return null;
    } catch (error) {
        console.error("Error fetching photo:", error); // Log any error details
        return null;
    }
};
