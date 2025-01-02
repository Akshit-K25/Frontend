import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import ServiceUnavailable from "./ServiceUnavailable";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import HomeAccessPage from "./HomeAccessPage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import AdminDashboard from "./AdminDashboard";
import Events from "./Events";
import ViewEvent from "./ViewEvent";

function App() {
  const clearSessionAndRedirect = () => {
    sessionStorage.clear();
    return <Navigate to="/login" replace />;
  };

  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/home" element={<HomeAccessPage />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
              <ProtectedRoute requiresAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
              }
            />

            {/* Logout Route */}
            <Route path="/logout" element={clearSessionAndRedirect()} />

            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<ViewEvent />} />

            {/* Error Routes */}
            <Route path="/not-found" element={<PageNotFound />} />
            <Route path="/service-unavailable" element={<ServiceUnavailable />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
