import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Exercise() {
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    const APIKEY = "https://wger.de/api/v2/exercise/?format=json";

    const fetchApi = () => {
      fetch(APIKEY)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setExercise(data?.results[0]);
        });
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Navbar />
      <h1> Exercise </h1>
      <p>{exercise.name}</p>
      <p>{exercise.muscles}</p>
    </div>
  );
}

export default Exercise;
