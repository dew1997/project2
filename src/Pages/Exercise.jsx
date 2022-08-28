import { useEffect, useState } from "react";
import ExerciseTable from "./ExerciseTable";
import Filter from "./Filter";

function Exercise() {
  const [exercise, setExercise] = useState([]);
  const [body, setBody] = useState([]);
  const [equipment, setEquipment] = useState([]);

  const handleClick = () => {
    console.log("click");
  };

  const exerciseURL = "https://wger.de/api/v2/exercise/?format=json&language=2";
  const bodyPartsURL = "https://wger.de/api/v2/exercisecategory/?format=json";
  const equipmentsURL = "https://wger.de/api/v2/equipment/?format=json";

  const fetchExercise = () => {
    fetch(exerciseURL)
      .then((response) => response.json())
      .then((data) => {
        setExercise(data.results);
      });
  };

  const fetchBodyPart = () => {
    fetch(bodyPartsURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setBody(data.results);
      });
  };
  const fetchEquipments = () => {
    fetch(equipmentsURL)
      .then((response) => response.json())
      .then((data) => {
        setEquipment(data.results);
      });
  };

  useEffect(() => {
    fetchExercise();
    fetchBodyPart();
    fetchEquipments();
  }, []);

  return (
    <div>
      <div className="body">
        {body.map((info) => {
          return <Filter key={info.id} name={info.name} />;
        })}
      </div>
      <div>
        {equipment.map((info) => {
          return <Filter key={info.id} name={info.name} />;
        })}
      </div>
      <div className="button">
        <button onClick={handleClick}> Search</button>
      </div>
      <div className="container">
        {exercise.map((info) => {
          return (
            <ExerciseTable
              key={info.id}
              name={info.name}
              description={info.description}
            />
          );
        })}

        <button onClick={handleClick}>Next Page</button>
        <button> Previous Page</button>
      </div>
    </div>
  );
}

export default Exercise;
