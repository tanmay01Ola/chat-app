import "./index.css";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import { LandingPage } from "./screen/landingPage";
export function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/landingPage" element = {<LandingPage></LandingPage>}></Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
