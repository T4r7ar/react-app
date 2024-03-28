import  React from "react"
import  * as ReactDOMClient from 'react-dom/client'
import App from "./App"

import "./styles/main.css"

const main = ReactDOMClient.createRoot(document.getElementById('main')) 
main.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);