import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Footer } from "./shared/components/footer/Footer";
import { NotFound } from "./shared/components/not-found/NotFound";
import { User } from "./features/user/container/User";
import { UserDetail } from "./features/user/components/user-detail/UserDetail";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user/:id" element={<UserDetail />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
