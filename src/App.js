import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <Routes/>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
