import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LandingPage from "./pages/LandingPage";
import BuilderPage from "./pages/BuilderPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";
import PromptPage from "./pages/PromptPage";
import { ProjectProvider } from "./context/ProjectProvider";
import Loader from "./components/Loader";

function App() {
    return (
        <BrowserRouter>
            <Auth0Provider
                domain={import.meta.env.VITE_AUTH0_DOMAIN}
                clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                    scope: "openid profile email",
                }}
            >
                <ProjectProvider>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/prompt" element={<PromptPage />} />
                        <Route path="/builder" element={<BuilderPage />} />

                        <Route path="/test" element={<TestPage />} />

                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Loader />
                </ProjectProvider>
            </Auth0Provider>
        </BrowserRouter>
    );
}

export default App;
