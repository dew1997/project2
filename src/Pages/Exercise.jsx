import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Table from "./Table";

function Exercise() {
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    const APIKEY = "https://wger.de/api/v2/exercise/?format=json";

    const fetchApi = () => {
      fetch(APIKEY)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
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
    </div>
  );
}

export default Exercise;
