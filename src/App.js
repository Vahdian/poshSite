import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Routing from "./routes/Routes";
// import Navbar from './shared/navBar/NavBar';

function App() {
  const width = useWindowSize();
  return (
    <>
      {width > 1370 ? (
        <Routing />
      ) : (
        <div className="flex justify-center items-center h-screen flex-col">
          <span className="loader mb-6"></span>
          Still working on mobile version, please access from a PC
        </div>
      )}
    </>
  );
}

export default App;
