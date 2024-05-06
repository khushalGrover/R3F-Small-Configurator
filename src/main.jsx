import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CustomizationProvider } from "./constants/Customization";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CustomizationProvider>
			<App />
		</CustomizationProvider>
	</React.StrictMode>
);
