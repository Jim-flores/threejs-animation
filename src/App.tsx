import { Slider } from "@mui/material";
import "./App.css";
import ThreeRender from "./components/ThreeRender";
import { useState } from "react";
function valuetext(value: number) {
  return `${value}`;
}
function App() {
  const [value , setValue] = useState<number>(4);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  }
  return (
    <div className="container">
      <section>
        <ThreeRender numberLights={value} />
        <div className="information">
          <h1>Animation with Blender + Threejs</h1>
          <p>This project showcases a realistic 3D picture frame created with React Three Fiber and modeled in Blender. The frame is mounted on a virtual framed artwork within an interactive 3D environment.</p>
          <h3>Light control ⬇️</h3>
          <Slider
            defaultValue={4}
            getAriaValueText={valuetext}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={0.1}
            min={0}
            max={10}
          />
        </div>  
      </section>
    </div>
  );
}

export default App;
