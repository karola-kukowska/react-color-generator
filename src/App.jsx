import { useState } from "react";
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colorList, setColorList] = useState(new Values("#a459d1").all(10));

  const addColor = (color) => {
    try {
      setColorList(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <h2 className="color-title">Color Generator</h2>
      <Form addColor={addColor} />
      <ColorList colors={colorList} />
    </main>
  );
};
export default App;
