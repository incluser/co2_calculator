import "./App.css";
import Header from "./components/Header/Header";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/calculator" element={<Main />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;



