import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";

function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
        setRandomQuote(data.quotes);
      });
  }, []);

  function setRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setCurrentQuote(quotesArray[randomIndex]);
  }

  function handleNewQuoteClick() {
    setRandomQuote(quotes);
  }

  return (
    <div className="quote-container">
      <h1>Zitatgenerator</h1>
      {currentQuote.quote && (
        <div className="quote-box">
          <p className="quote-text">"{currentQuote.quote}"</p>
          <p className="quote-author">- {currentQuote.author}</p>
        </div>
      )}
      <button className="new-quote-button" onClick={handleNewQuoteClick}>
        Neues Zitat
      </button>
    </div>
  );
}

export default QuoteGenerator;
