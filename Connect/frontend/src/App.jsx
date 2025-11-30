import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>Data: {data.length}</p>
      {data.map((d) => (
        <div key={d.id}>
          <h3>{d.name}</h3>
          <p>{d.value}</p>
        </div>
      ))}
    </>
  );
}

export default App;
