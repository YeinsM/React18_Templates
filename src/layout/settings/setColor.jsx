import { useState } from "react";
import PropTypes from "prop-types";

export const SetColor = ({ onColorChange }) => {
    const [layoutColor, setLayoutColor] = useState("light"); // Initial Color State
    //

    const handleColorChange = () => {
        // Change the layout color
        if (layoutColor === "light") {
            setLayoutColor("dark");
        } else {
            setLayoutColor("light");
        }

        onColorChange(layoutColor);
    };

    return <button onClick={handleColorChange}>Cambiar Color</button>;
};

SetColor.propTypes = {
    onColorChange: PropTypes.func.isRequired,
};
