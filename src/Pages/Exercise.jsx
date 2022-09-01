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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * EXERCISE_PER_PAGE;
  const selectedExercise = exercise.slice(
    startIndex,
    startIndex + EXERCISE_PER_PAGE
  );

  const handleClick = (num) => {
    setPage(num);
  };

  const handleFilter = () => {
    setBodyId(bodyId);
    setEquipmentId(equipmentId);
    fetchExercise();
    setBodyId([]);
    setEquipmentId([]);
  };

  const handleReset = () => {
    fetchExercise();
  };

  const exerciseURL = `https://wger.de/api/v2/exercise/?format=json&language=2&category=${bodyId}&equipment=${equipmentId}&limit=300&offset=`;
  const bodyPartsURL = "https://wger.de/api/v2/exercisecategory/?format=json";
  const equipmentsURL = "https://wger.de/api/v2/equipment/?format=json";

  const fetchExercise = () => {
    fetch(exerciseURL)
      .then((response) => response.json())
      .then((data) => {
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
      <h1 className="text-xl font-bold w-full sm:text-2xl pb-2 text-center">
        Filter
      </h1>
      <div className="container flex justify-around items-center">
        <div className="body px-10">
          <TargetArea key={body.id} body={body} setBodyId={setBodyId} />
          <Equipment
            key={equipment.id}
            equipment={equipment}
            setEquipmentId={setEquipmentId}
          />
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleFilter}> Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <ul className="exercises">
        {selectedExercise.map((exercise) => (
          <li key={exercise.id}>
            <ExerciseTable exercise={exercise} />
          </li>
        ))}

        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </ul>
    </div>
  );
}

export default Exercise;
