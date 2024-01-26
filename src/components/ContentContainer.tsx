import { useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AspectRatioContainer from "./main/AspectRatioContainer";

import SidebarContainer from "./sidebar/SidebarContainer";
import Preview from "./main/Preview";

export default function ContentContainer() {
  const [yourName, setYourName] = useState("");
  function handleYourNameChange(e) {
    setYourName(e.target.value);
  }
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-screen min-w-screen rounded-lg"
      >
        {/*LEFT PANEL */}
        <ResizablePanel defaultSize={25}>
          <div className="flex flex-h-full p-6">
            <SidebarContainer />
          </div>
        </ResizablePanel>
        {/*RIGHT PANEL*/}
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={66}
          maxSize={80}
          className="bg-gray-300 p-6"
        >
          <AspectRatioContainer>
            <Preview />
          </AspectRatioContainer>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
