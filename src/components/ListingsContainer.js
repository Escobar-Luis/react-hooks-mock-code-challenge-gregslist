import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData, onDelete}) {
  return (
    <main>
      <ul className="cards">
        {listingData.map((listing) => {
          return <ListingCard onDelete={onDelete} key={listing.id} listing={listing}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
