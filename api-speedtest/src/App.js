import React, { useState, useEffect } from "react";
import axios from "axios";
import CardDisplay from "./components/CardDisplay.js";

const App = () => {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data.message);
        setData(res.data.message);
        setTrigger(false);
      })
      .catch((err) => {
        console.log(err);
        setTrigger(false);
      });
  }, [trigger]);

  return (
    <div className="App">
      <h1>RandoDogs</h1>
      <CardDisplay data={data} setTrigger={setTrigger} />
    </div>
  );
};

export default App;
