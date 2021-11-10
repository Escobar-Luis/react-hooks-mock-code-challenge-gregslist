import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listingData, setListingData] = useState([])
  const[search, setSearh] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r=>r.json())
    .then((data) => setListingData(data))
  }, [])

  function handleDelete(deletedListing) {
    const updatedListing = listingData.filter((listing) => listing.id !== deletedListing.id)
    setListingData(updatedListing)
  }

  const visibleListings= listingData.filter((listing) => listing.description.toLowerCase().includes(search))
  return (
    <div className="app">
      <Header search={search} setSearh={setSearh}/>
      <ListingsContainer onDelete={handleDelete} listingData={visibleListings}/>
    </div>
  );
}

export default App;
