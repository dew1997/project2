import { useEffect, useState } from "react";
import Equipment from "./Equipment";
import ExerciseTable from "./ExerciseTable";
import TargetArea from "./TargetArea";

function Exercise() {
  const [exercise, setExercise] = useState([]);
  const [body, setBody] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [changePage, setChangePage] = useState(0);
  const [bodyId, setBodyId] = useState([]);
  const [equipmentId, setEquipmentId] = useState([]);
  //   const [workout, setWorkout] = useState([]);

  const handlePageIncrement = () => {
    setChangePage(changePage + 20);
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setExercise(data.results);
      });
  };

  const handleSearch = () => {
    setBodyId(bodyId);
    setEquipmentId(equipmentId);
    fetchSearchURL();
    setBodyId([]);
    setEquipmentId([]);
  };

  const fetchSearchURL = () => {
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        setExercise(data.results);
      });
  };

  const searchURL = `https://wger.de/api/v2/exercise/?format=json&language=2&category=${bodyId}&equipment=${equipmentId}&limit=20&offset=${changePage}`;
  const exerciseURL = `https://wger.de/api/v2/exercise/?format=json&language=2&limit=20&offset=${changePage}`;
  const bodyPartsURL = "https://wger.de/api/v2/exercisecategory/?format=json";
  const equipmentsURL = "https://wger.de/api/v2/equipment/?format=json";

  const fetchExercise = () => {
    fetch(exerciseURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
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
      <div className="SearchBox">
        <div className="targetarea">
          {body.map((info) => {
            return (
              <TargetArea
                key={info.id}
                id={info.id}
                name={info.name}
                setBodyId={setBodyId}
              />
            );
          })}
        </div>
        <br />
        <div className="equipment">
          {equipment.map((info) => {
            return (
              <Equipment
                key={info.id}
                id={info.id}
                name={info.name}
                setEquipmentId={setEquipmentId}
              />
            );
          })}
        </div>

        <div className="button">
          <button onClick={handleSearch}> Search</button>
        </div>
      </div>

      <div className="exercises">
        {exercise.map((exercise) => {
          return (
            <ExerciseTable
              key={exercise.id}
              name={exercise.name}
              description={exercise.description}
              exercise={exercise}
            />
          );
        })}

        <button onClick={handlePageIncrement}>Next Page</button>
      </div>
    </div>
  );
}

export default Exercise;
