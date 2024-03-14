import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState('#000000');
    // const [colors, setColors] = useState([]);
    // const [colorName, setColorName] = useState({main: 'Black', back: 'White'});

    // const handleColorChange = (e) => {
    //     setColorName(c=> ({...c, main: e.target.value}));
    // }

    // const addColor = () => {
    //     setColors(c => [...c, 'Blue']);
    //     console.log(colors);
        
    // }

    // const removeColor = () => {
    //     setColors(c => [...c, 'Blue']);
    // }
    return (
        <div className="color-picker">
            <h2>Color Picker</h2>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        </div>
    );
}

export default ColorPicker;