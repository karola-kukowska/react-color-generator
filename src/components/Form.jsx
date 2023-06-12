import { useState } from "react";
import Values from "values.js";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#a459d1");

  const handleSubmit = (event) => {
    event.preventDefault();
    addColor(color);
  };

  return (
    <section>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="picker"
          id="picker"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#1a7f87"
          name="colorVal"
          id="colorVal"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          Generate
        </button>
      </form>
    </section>
  );
};

export default Form;
