import React from "react";
import { createRoot } from "react-dom/client";

//コンポーネント
import App from "./App";

//Appをid="root"にレンダリングする。
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
