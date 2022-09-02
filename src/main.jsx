import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import "./index.css";
import { ProductProvider } from "@/Context/ProductContext";
import { AuthProvider } from "@/Context/Auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
