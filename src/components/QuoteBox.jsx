er import React from 'react';

function QuoteBox({ quote, getNewQuote }) {
  return (
    <div className="quote-box">
      <p className="quote">“{quote.text}”</p>
      <p className="author">— {quote.author}</p>
      <button onClick={getNewQuote}>Enter New Quote</button>
    </div>
  );
}

export default QuoteBox;


