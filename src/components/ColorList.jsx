import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((c, index) => {
        return <SingleColor key={nanoid()} index={index} color={c} />;
      })}
    </section>
  );
};

export default ColorList;
