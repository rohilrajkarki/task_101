import "./App.scss";
import DateBox from "./components/DateBox/DateBox";
import mockData from "./data/mockData";

function App() {
  return (
    <div className="main_container">
      {/* <Home /> */}
      {mockData.map((item) => (
        <DateBox workData={item} />
      ))}
    </div>
  );
}

export default App;
