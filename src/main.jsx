import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WishlistProvider } from "./context/WishlistContext";  // استيراد الـ WishlistProvider
import "./index.css";  // تأكد من أن ملفات CSS موجودة

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>  {/* تغليف التطبيق بـ WishlistProvider */}
      <App />
    </WishlistProvider>
  </React.StrictMode>
);
