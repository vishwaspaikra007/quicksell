import Cards from "./components/Cards";
import './App.css'


function App() {
  return (
    <div className="App">
      <Cards status="backlog" userImg="usr-1" />
      <Cards status="done" userImg="usr-2" />
      <Cards status="cancel" userImg="usr-3" />
      <Cards status="todo" userImg="usr-4" />
      <Cards status="done" userImg="usr-5" />
      <Cards status="inprogress" userImg="usr-23" />
    </div>
  );
}

export default App;
