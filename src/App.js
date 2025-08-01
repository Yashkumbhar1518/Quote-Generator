import React, { useState } from 'react';
import './App.css';
import './theme.css';

import QuoteBox from './components/QuoteBox';
import AddQuote from './components/AddQuote';
import ThemeToggle from './components/ThemeToggle';

import quotesData from './data/quotes';

function App() {
  const [quotes, setQuotes] = useState(quotesData);
  const [current, setCurrent] = useState(quotes[0]);
  const [isDark, setIsDark] = useState(false);

  const getNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setCurrent(quotes[random]);
  };

  const addQuote = quote => {
    setQuotes([...quotes, quote]);
    setCurrent(quote);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? 'light' : 'dark';
  };

  return (
    <div className="App">
      <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
 
      <QuoteBox quote={current} getNewQuote={getNewQuote} />
      <AddQuote addQuote={addQuote} />
 
    </div>
  );
}

export default App;

