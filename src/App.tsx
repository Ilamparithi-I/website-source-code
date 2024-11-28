import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

// This component handles the redirect logic based on the query parameter
function RedirectHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const redirectTo = params.get("redirectTo");
        if (redirectTo) {
            navigate(redirectTo); // Navigate to the original path
        }
    }, [location, navigate]);

    return null; // This component doesn't render anything
}

function App() {
    return (
        <Router>
            {/* Add the RedirectHandler to process the query parameter */}
            <RedirectHandler />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="projects/:proj" element={<Project />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
