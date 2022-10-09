import "./App.css";
//React Router Dom--------------------
import { Route, Routes } from "react-router-dom";
//Components
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Class from "./Pages/Class/Class";
import Tutor from "./Pages/Tutor/Tutor";
import BookStore from "./Pages/BookStore/BookStore";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Class />} path="/" />
        <Route element={<Tutor />} path="/tutor" />
        <Route element={<BookStore />} path="/bookstore" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
