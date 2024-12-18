import React, { useState } from "react";
import quotes from "./assets/quotes.json"

import "./App.css"; // Add custom CSS for styling

// Define the structure of a quote
interface Quote {
  text: string;
  author: string;
}

const App: React.FC = () => {
  // State for the current quote
  const [currentQuote, setCurrentQuote] = useState<Quote>(getRandomQuote());

  // Function to get a random quote
  function getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Function to handle new quote generation
  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">"{currentQuote.qoute}"</p>
        <p className="quote-author">- {currentQuote.author}</p>
        <button className="new-quote" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;