import "./App.scss";
import { UserProvider } from "./lib/context/user";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

function App() {
  // const isLoginPage = window.location.pathname === "/login";
  const isLoginPage = true;

  console.log(isLoginPage);
  return (
    <div className="main_container">
      <UserProvider>
        <main>{isLoginPage ? <Login /> : <Home />}</main>
        {/* <Home /> */}
        {/* <FinePage /> */}
      </UserProvider>
      {/* {mockData.map((item) => (
        <DateBox workData={item} key={item.date} />
      ))} */}
      {/* <Calend /> */}
    </div>
  );
}

export default App;
