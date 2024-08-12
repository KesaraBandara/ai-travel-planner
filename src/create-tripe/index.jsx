/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "@/constants/options";
import { Button } from "@/components/ui/button";

function CreateTripe() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Function to handle input change and fetch results from Nominatim API
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      // Start searching when input length is more than 2 characters
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search`,
          {
            params: {
              q: value,
              format: "json",
              addressdetails: 1,
              limit: 5,
            },
          }
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching data from Nominatim API:", error);
      }
    } else {
      setResults([]); // Clear results if input is less than 3 characters
    }
  };

  // Function to handle selection of a place
  const handleSelect = (place) => {
    setQuery(place.display_name); // Update input with selected place
    setResults([]); // Clear results after selection
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences🏕️🌳</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some information, and our trip planner will generate a
        customized itinerary based on your preferences
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter destination"
          />
          {results.length > 0 && (
            <ul className="border rounded mt-2">
              {results.map((place, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect(place)}
                >
                  {place.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planing your trip?
          </h2>
          <Input placeholder={"Ex.3"} type="number" />
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          What is your Budget? The budget exclusively allocatrd for activities
          and dining purposes.
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelsList.map((item, index) => (
            <div
              key={index}
              className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-end">
      <Button> Generate Tripe</Button>
      </div>
    </div>
  );
}

export default CreateTripe;
