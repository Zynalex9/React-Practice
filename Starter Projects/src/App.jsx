import React from "react";
import { Accordian, ColorPicker, ImageSlider, LoadMore, StarRating, TreeView } from "./components";

function App() {
  return (
    <>
      <Accordian />
      <ColorPicker />
      <StarRating stars={5} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMore/>
      <TreeView/>
    </>
  );
}

export default App;
