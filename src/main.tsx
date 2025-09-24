import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log('Main.tsx loaded');
console.log('Root element:', document.getElementById("root"));

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  createRoot(rootElement).render(<App />);
  console.log('App rendered successfully');
} catch (error) {
  console.error('Failed to render app:', error);
  
  // Fallback render
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1>Hypeautoparts</h1>
        <p>Loading...</p>
        <p>If this message persists, please refresh the page.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
}
