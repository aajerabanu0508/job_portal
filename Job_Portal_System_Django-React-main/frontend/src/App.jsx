import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import JobListPage from "./JobListPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ApplyJobPage from "./ApplyJobPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/jobs" element={<JobListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/apply/:jobId" element={<ApplyJobPage />} />
    </Routes>
  );
}