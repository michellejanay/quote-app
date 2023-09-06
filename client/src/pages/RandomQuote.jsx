import React, { useState, useEffect } from "react";
import Btn from "../components/Btn";
import Quote from "../components/Quote";
import { PropagateLoader } from "react-spinners";

const RandomQuote = () => {
  const [randomData, setRandomData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const randomClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    fetch("https://michellejanay-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((jsonData) => {
        setRandomData(jsonData);
      })
      .then(setLoading(false));
  }, [clicked]);

  return (
    <div className="quotes">
      {loading && <PropagateLoader />}
      {randomData &&
        [randomData].map((q, i) => (
          <Quote quote={q.quote} author={q.author} key={`id-${i}`} />
        ))}
      <Btn randomClick={randomClick} />
    </div>
  );
};

export default RandomQuote;
