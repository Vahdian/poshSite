import "./App.css";
import Loader from "./components/loaderComponent/Loader";
import useWindowSize from "./hooks/useWindowSize";
import Routing from "./routes/Routes";
// import Navbar from './shared/navBar/NavBar';

function App() {
  const width = useWindowSize();
  return <>{width > 900 ? <Routing /> : <Loader />}</>;
}

export default App;
