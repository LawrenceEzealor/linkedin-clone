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
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
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