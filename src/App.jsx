import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { APP_NAME } from "./constants/constants";
// Pages
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import Portfolios from "./pages/Portfolios";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import Privacy from "./pages/Privacy";
// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ErrorMessage } from "./components/ErrorMessages";

function App() {
  useEffect(() => {
    document.title = APP_NAME;
  }, []);

  const [errorMessages, setErrorMessages] = useState([]);

  const addErrorMessage = (message, title = "Error") => {
    const id = Date.now();
    setErrorMessages((prevMessages) => [
      ...prevMessages,
      { id, message: "Log-in attempt failed!", title: "Error" },
    ]);
    setTimeout(() => {
      setErrorMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );
    }, 10000);
  };

  const deleteErrorMessage = (id) => {
    setErrorMessages((prevErrors) =>
      prevErrors.filter((error) => error.id !== id)
    );
  };

  return (
    <div className="min-h-screen font-poppins text-sm text-slate-300">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="w-full">
          {errorMessages.map((msg) => (
            <ErrorMessage
              key={msg.id}
              deleteSelf={deleteErrorMessage}
              message={msg.message}
              title={msg.title}
              id={msg.id}
            />
          ))}
        </div>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={<Dashboard addErrorMessage={addErrorMessage} />}
            />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/community" element={<Community />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
