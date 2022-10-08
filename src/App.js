import "./App.css";
//Components
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Class from "./Pages/Class/Class";

function App() {
  return (
    <div className="App">
      <Header />
      <Class />
      <Footer />
    </div>
  );
}

export default App;
