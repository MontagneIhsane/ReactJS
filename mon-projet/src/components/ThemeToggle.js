import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ThemeToggle() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    return (
    <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Mode {theme === "light" ? "Sombre" : "Clair"}
    </button>
    );
}

export default ThemeToggle;

