import React from "react";
import Tabs from "./Tabs";

const TabsParent = () => {
  const tabs = [
    {
      title: "About Us",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Services",
      content: "We provide best services",
    },
    {
      title: "Ready?",
      content: "Let's Start",
    },
  ];
  return (
    <>
      <div className="tab-container">
        <Tabs tabsContent={tabs} />
      </div>
    </>
  );
};

export default TabsParent;
