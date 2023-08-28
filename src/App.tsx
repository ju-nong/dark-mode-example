import { useState } from "react";
import { Document, Flashlight, ToggleButton } from "./components";
import { Mode } from "./types";

function App() {
    const [mode, setMode] = useState<Mode>("dark");

    function handleToggleMode() {
        const isDark = mode === "dark";

        const $root = document.getElementById("root");

        $root?.style.setProperty("--cursor", isDark ? "auto" : "none");

        setMode(isDark ? "white" : "dark");
    }

    return (
        <>
            <Document mode={mode} />
            {mode === "dark" ? <Flashlight /> : null}
            <ToggleButton mode={mode} onToggleMode={handleToggleMode} />
        </>
    );
}

export default App;
