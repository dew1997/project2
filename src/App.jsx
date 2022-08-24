import "./App.css";

function App() {
  fetch("https://wger.de/api/v2/exerciseinfo/?limit=20&offset=20")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div className="App">
      <h1> Testing</h1>
      <h2>{data.name}</h2>
    </div>
  );
}

export default App;
