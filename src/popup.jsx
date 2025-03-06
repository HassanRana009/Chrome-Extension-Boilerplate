import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss"; 
function Popup() {
    return (
        <div className="header">
            <h1>Hello World</h1>
            <p>This is a multipages popup</p>
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Popup />);
