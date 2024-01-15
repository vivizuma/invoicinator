import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import "./App.css";
function App() {
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div></div>One
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default App;
