import React from "react";
// src/Quotes.js
const Quotes = () => (
  <div>
    {quotes.map(quote => (
      <img src={quote.image} />
    ))}
  </div>
);

export default Quotes;