import React from "react";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";
import { PropagateLoader } from "react-spinners";

const Quotes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://michellejanay-quote-server.glitch.me/quotes")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);
  return (
    <div>
      <header className="quotes-header"></header>
      {loading && <PropagateLoader color="rgba(0, 0, 0, 1)" />}
      {data &&
        data.map((q) => (
          <Quote quote={q.quote} author={q.author} key={data.indexOf(q)} />
        ))}
    </div>
  );
};

export default Quotes;
