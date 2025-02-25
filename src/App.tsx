import "./App.scss";
import DateBox from "./components/DateBox/DateBox";
import Home from "./pages/Home";

function App() {
  return (
    <div className="main_container">
      <Home />
      <DateBox />
    </div>
  );
}

export default App;
