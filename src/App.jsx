import "./App.css";
import { AddMeetup } from "./Components/AddMeetup/AddMeetup";
import { Home } from "./Components/Home/Home";
import { Routers } from "./Components/Routers/Routers";

function App() {
  return (
    <div className="App">
      <Routers/>
      {/* < AddMeetup/>
      <Home/> */}
    </div>
  );
}

export default App;
