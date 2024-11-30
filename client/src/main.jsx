import React from "react";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
        appearance={{
          variables: {
            colorPrimary: "#F0ECE5",
            colorText: "#F0ECE5",
            colorTextSecondary: "#F0ECE5",
            colorTextOnPrimaryBackground: "#F0ECE5",
            colorBackground: "#080912",
            colorNeutral: "#F0ECE5",
            colorInputText: "#F0ECE5",
            colorInputBackground: "#0e0f1a",
          },

        }}
      >
        <App />
      </ClerkProvider>
    </Router>
  </StrictMode>
);
