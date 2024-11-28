import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    // On initial load, check for 'redirectTo' query parameter and navigate if present
    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const redirectTo = params.get("redirectTo");
        if (redirectTo) {
            navigate(redirectTo); // Navigate to the original path
        }
    }, [location, navigate]);

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="projects/:proj" element={<Project />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
