
import "./index.css";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import { LandingPage } from "../components/landingPage";
import { ChatRoom } from "../components/chatRoom";
import { JoinRoom } from "../components/joinRoom";
export function App() {
  return (
     <BrowserRouter>
     <Routes> 
           <Route path="/" element={<LandingPage></LandingPage>}> </Route>
           <Route path="/chatRoom/:roomId" element={<ChatRoom></ChatRoom>}></Route>
           <Route path="/joinroom" element = {<JoinRoom></JoinRoom>}></Route>
     </Routes>
        </BrowserRouter>
  );
}

export default App;
