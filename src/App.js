import "./App.css";
import Loader from "./components/loaderComponent/Loader";
import Socials from "./components/socialsComponent/Socials";
import useWindowSize from "./hooks/useWindowSize";
import Routing from "./routes/Routes";
// import Navbar from './shared/navBar/NavBar';

function App() {
  const width = useWindowSize();
  return (
    <>
      <Socials />
      <Routing />
    </>
  );
}
export default App;
