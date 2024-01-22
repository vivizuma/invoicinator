import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import SideBarContent from "./tests/State.tsx";

export default function ContentContainer() {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-screen min-w-screen rounded-lg"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex flex-h-full p-6">
            <span className="font-semibold flex-col">Sidebar</span>
            <SideBarContent />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6 bg-gray-200">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
