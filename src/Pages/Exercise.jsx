import { useEffect, useState } from "react";
import Equipment from "./Equipment";
import ExerciseTable from "./ExerciseTable";
import TargetArea from "./TargetArea";
import { EXERCISE_PER_PAGE } from "./context/GlobalState";
import Pagination from "./Pagination";
function Exercise() {
  const [exercise, setExercise] = useState([]);
  const [body, setBody] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [bodyId, setBodyId] = useState([]);
  const [equipmentId, setEquipmentId] = useState([]);
  //   const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  //   const [workout, setWorkout] = useState([]);

  const startIndex = (page - 1) * EXERCISE_PER_PAGE;
  const selectedExercise = exercise.slice(
    startIndex,
    startIndex + EXERCISE_PER_PAGE
  );

  const handleClick = (num) => {
    setPage(num);
  };

  const handleFilter = () => {
    exerciseURL;
    setBodyId(bodyId);
    setEquipmentId(equipmentId);
    fetchExercise();
    setBodyId([]);
    setEquipmentId([]);
  };

  const exerciseURL = `https://wger.de/api/v2/exercise/?format=json&language=2&category=${bodyId}&equipment=${equipmentId}&limit=300&offset=`;
  const bodyPartsURL = "https://wger.de/api/v2/exercisecategory/?format=json";
  const equipmentsURL = "https://wger.de/api/v2/equipment/?format=json";

  const fetchExercise = () => {
    fetch(exerciseURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results.length);
        setExercise(data.results);
        setTotalPages(Math.ceil(data.results.length / EXERCISE_PER_PAGE));
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
  }, []);

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
          <button onClick={handleFilter}> Search</button>
        </div>
      </div>

      <div className="exercises">
        {selectedExercise.map((exercise) => {
          return (
            <ExerciseTable
              key={exercise.id}
              name={exercise.name}
              description={exercise.description}
              exercise={exercise}
            />
          );
        })}

        {/* <button onClick={handlePageIncrement}>Next Page</button> */}
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Exercise;
