import { useState } from "react";
import { Document, Flashlight, ToggleButton } from "./components";
import { Mode } from "./types";

function App() {
    const [mode, setMode] = useState<Mode>("dark");

    function handleToggleMode() {
        setMode(mode === "dark" ? "white" : "dark");
    }

    return (
        <>
            <Document />
            {mode === "dark" ? <Flashlight /> : null}
            <ToggleButton mode={mode} onToggleMode={handleToggleMode} />
        </>
    );
}

export default App;
