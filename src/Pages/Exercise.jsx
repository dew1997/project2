import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Table from "./Table";

function Exercise() {
  const [exercise, setExercise] = useState([]);
  const [page, setPage] = useState({});

  const handleClick = () => {
    setPage("https://wger.de/api/v2/exercise/?format=json&language=2&limit=40");
  };

  useEffect(() => {
    const APIKEY =
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=20";

    const fetchApi = () => {
      fetch(APIKEY)
        .then((response) => response.json())
        .then((data) => {
          setExercise(data.results);
        });
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Navbar />
      {exercise.map((info) => {
        return (
          <Table
            key={info.id}
            name={info.name}
            description={info.description}
          />
        );
      })}

      <button onClick={handleClick}>Next Page</button>
      <button> Previous Page</button>
    </div>
  );
}

export default Exercise;
