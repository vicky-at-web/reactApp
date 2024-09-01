import { useState, useEffect } from 'react'

export default function QuoteGenerator() {
    const url = "https://inspo-quotes-api.herokuapp.com/quotes/random";
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        getQuotes();
      }, []);

    const getQuotes = async () => {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote)
    }

    return (
        <div>
          <button onClick={getQuotes}>Get Quote Using handler</button>
          <h1>{quote.text}</h1>
          <h3>{quote.author}</h3>
        </div>
      );
}