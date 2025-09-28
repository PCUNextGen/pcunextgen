import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 rounded-xl border border-border bg-card/60">
        <h1 className="text-5xl font-extrabold mb-2 text-gradient">404</h1>
        <p className="text-lg text-muted-foreground mb-4">This page could not be found.</p>
        <a href="/" className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
