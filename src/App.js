import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./organism/dashboard";
import ApplicationDetails from "./organism/applications/applicationDetails";
import ResourceDetails from "./organism/resources/resourceDetails";
import "./App.css";

export default function App() {
      return (
        <Router>
        <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/application/:name" element={<ApplicationDetails/>} />
              <Route path="/resource/:name" element={<ResourceDetails />} />
        </Routes>
        </Router>
    );
  }