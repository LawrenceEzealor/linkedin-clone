import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      {/* <Route path='./login' element={<Login />} /> */}
      {/* <Route path='./home' element={<Home />} /> */}
      {/* <Route path='.header' element={<Header/>} /> */}
      {/* <Route path='./main' element={<Main />} /> */}
      {/* <Route path="/images" element={<images />} /> */}
      {/* <Route path='./leftside' element={<Leftside />} /> */}
      {/* <Route path='.rightside' element={<Rightside />} /> */}
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;