import { useEffect, useState } from "react";
import ExerciseTable from "./ExerciseTable";
import Filter from "./Filter";

function Exercise() {
  const [exercise, setExercise] = useState([]);
  const [body, setBody] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [changePage, setChangePage] = useState(0);

  const handlePageIncrement = () => {
    setChangePage(changePage + 20);
    fetchExercise();
  };

  const handleSearch = () => {};

  const exerciseURL = `https://wger.de/api/v2/exercise/?format=json&language=2&limit=20&offset=${changePage}`;
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
  }, [changePage]);

  return (
    <div>
      <div className="filters">
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
        <button onClick={handleSearch}> Search</button>
      </div>
      <div className="exercises">
        {exercise.map((info) => {
          return (
            <ExerciseTable
              key={info.id}
              name={info.name}
              description={info.description}
            />
          );
        })}

        <button onClick={handlePageIncrement}>Next Page</button>
      </div>
    </div>
  );
}

export default Exercise;
