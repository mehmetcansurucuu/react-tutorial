import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import { HomePage } from "./Pages/Home";
import { SignUpPage } from "./Pages/SignUp";
import { ProfilePage } from "./Pages/Profile";
import { SettingsPage } from "./Pages/Settings";
import { ProtectedRoute } from "./Components/ProtectedRoute";

import { Layout } from 'antd';

import 'antd/dist/antd.min.css';
import './assets/style.css'

const { Content } = Layout;

function App() {
  return (
<div>
  <Layout className="layout">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route
              path="/profile"
              element={
                  <ProtectedRoute>
                      <ProfilePage />
                  </ProtectedRoute>
              }
          />
          <Route
              path="/settings"
              element={
                  <ProtectedRoute>
                      <SettingsPage />
                  </ProtectedRoute>
              }
          />
      </Routes>
  </Layout>
</div>
  );
}

export default App;

