import React, { useState } from "react";

function ListingCard({listing, onDelete}) {
  const[isClicked, setIsClicked]=useState(false)

  function handleClick () {
    setIsClicked(!isClicked)
  }

  function handleDelete () {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE'
    })
    .then(r=>r.json())
    .then(() => onDelete(listing))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isClicked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
