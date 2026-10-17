import axios from "axios";
import "./index.css";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import { Router } from "express";
import { LandingPage } from "../components/landingPage";
export function App() {
 async function joinRoom (){
    await axios("http://localhost:3003/rooms" , {
       method : "POST"
    })
  }
  return (
     <BrowserRouter>
     <Routes> 
           <Route path="/" element={<LandingPage></LandingPage>}> </Route>
     </Routes>
        </BrowserRouter>
  );
}

export default App;
