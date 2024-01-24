import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MainContainer from "./main/MainContainer";

import SidebarContainer from "./sidebar/SidebarContainer";
export default function ContentContainer() {
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
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6 bg-gray-200">
            <MainContainer />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
