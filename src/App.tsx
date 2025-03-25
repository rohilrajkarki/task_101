import "./App.scss";
import Calend from "./components/Calander/Calend";
import DateBox from "./components/DateBox/DateBox";
import mockData from "./data/mockData";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="main_container">
      <Home />
      {/* {mockData.map((item) => (
        <DateBox workData={item} key={item.date} />
      ))} */}
      {/* <Calend /> */}
    </div>
  );
}

export default App;
