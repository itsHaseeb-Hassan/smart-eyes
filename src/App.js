import "./App.css";
import { ForgotPageScreen } from "./screens/ForgotPageScreen";
import { LoginpageScreen } from "./screens/LoginpageScreen";
import { GlobalStyles, theme, darktheme } from "./static/CSS/Style";
import { VerificationPageScreen } from "./screens/VerificationPageScreen";
import { ChangePasswordScreen } from "./screens/ChangePasswordScreen";
import { LiveStreamingScreen } from "./screens/LiveStreamingScreen";
import { ThemeProvider } from "styled-components";
import Settings from "./components/Settings";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomepageScreen from "./screens/HomepageScreen";
import DashBoard from "./components/DashBoard";
import Sites from "./components/Sites";
import AddSites from "./components/AddSites";
import Cameras from "./components/Cameras";
import AddCamera from "./components/AddCamera";
import License from "./components/License";
import SubUsers from "./components/SubUsers";
import AddSubUsers from "./components/AddSubUsers";
import Profile from "./components/Profile";
import UserTable from "./admin/UserTable";
import UserLicense from "./admin/UserLicense";
function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const [mode, setMode] = useState(true);
  const isMobile = width <= 829;
  const [showSidebar, setShowSidebar] = useState(isMobile ? false : true);

  return (
    <ThemeProvider theme={mode ? darktheme : theme}>
      <GlobalStyles />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomepageScreen
              mode={mode}
              setMode={setMode}
              isMobile={isMobile}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          }
        >
          <Route index element={<DashBoard />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/addSites" element={<AddSites />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/addCameras" element={<AddCamera />} />
          <Route path="/license" element={<License />} />
          <Route path="/subUser" element={<SubUsers />} />
          <Route path="/add_subUser" element={<AddSubUsers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/liveStreaming" element={<LiveStreamingScreen />} />
          <Route path="/UserTable" element={<UserTable />} />
          <Route path="/UserLicense" element={<UserLicense />} />
        </Route>
        <Route path="/Login" element={<LoginpageScreen />} />
        <Route path="/Forgot" element={<ForgotPageScreen />} />
        <Route path="/Verification" element={<VerificationPageScreen />} />
        <Route path="/ChangePassword" element={<ChangePasswordScreen />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
