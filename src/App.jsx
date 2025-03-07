import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Menupage from "./components/Menu";
import Header from "./components/Header";
import ContactPage from "./components/Contact";
import Recipe from "./components/Recipe";
const App = () => {

  return (
  
    <BrowserRouter>
    
      <Header/>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
