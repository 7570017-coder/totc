import React, { useState } from "react";
import { TabsWrapper, TabButton } from "./Styled";

const TabsNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = [
    "About",
    "Course",
    "Notes",
    "Project",
    "Podcast",
    "Book",
    "Review",
  ];

  return (
    <TabsWrapper>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabsWrapper>
  );
};

export default TabsNav;
