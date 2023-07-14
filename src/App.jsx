import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SetColor } from "./layout/settings/setColor";
// import Sidebar from "./layout/sidebar/sidebar";

function App() {
    const [count, setCount] = useState(0);
    const [layoutColor, setLayoutColor] = useState("light");

    const handleColorChange = (newColor) => {
        setLayoutColor(newColor);
    };

    return (
        <>
            <div
                className={`d-flex flex-column min-vh-100 layout-${layoutColor}`}
            >
                {/* After we need to repair this <Sidebar /> */}
                <SetColor onColorChange={handleColorChange} />
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary btn-circle" type="button">
                        B
                    </button>
                    <button className="btn btn-primary btn-rounded" type="button">
                        B
                    </button>
                </div>
                <div>
                    <a
                        href="https://vitejs.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a
                        href="https://react.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className={`card card-bg-${layoutColor}`}>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </>
    );
}

export default App;
