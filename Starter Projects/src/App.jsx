import React, { useEffect, useState } from "react";
import {
  Accordian,
  AutoComplete,
  ColorPicker,
  Finder,
  ImageSlider,
  LoadMore,
  QrCodeGenerator,
  ScrollIndicator,
  StarRating,
  TabsParent,
  ThemeSwitcher,
  TreeView,
  TicTacToe,
} from "./components";

function App() {
  const [scrolled, setScrolled] = useState(0);

  function handleScrollPercentage() {
    const scrolledHeight = document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((scrolledHeight / totalHeight) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <>
      <div
        className="progress-container"
        style={{ width: "100%", height: "20px", backgroundColor: "#fff" }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${scrolled}%`,
            height: "20px",
            backgroundColor: "lightgreen",
            position: "fixed",
          }}
        ></div>
      </div>
      <Accordian />
      <ColorPicker />
      <StarRating stars={5} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMore />
      <TreeView />
      <QrCodeGenerator />
      <ThemeSwitcher />
      <ScrollIndicator />
      <TabsParent/>
      <Finder/>
      <AutoComplete/>
      <TicTacToe />
    </>
  );
}

export default App;
