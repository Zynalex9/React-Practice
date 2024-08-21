import React from "react";
import { Accordian, ColorPicker, ImageSlider, StarRating } from "./components";

function App() {
  return (
    <>
      <Accordian />
      <ColorPicker />
      <StarRating stars={5} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </>
  );
}

export default App;
