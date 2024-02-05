import {
  useYourInfoContext,
  YourInfoProvider,
} from "@/contexts/YourInfoContext";
import {
  TheirInfoProvider,
  useTheirInfoContext,
} from "@/contexts/TheirInfoContext";
import { useAddItemContext, AddItemProvider } from "@/contexts/AddItemContext";

import { InvoiceProvider, useInvoiceContext } from "@/contexts/InvoiceContext";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AspectRatioContainer from "./main/AspectRatioContainer";

import SidebarContainer from "./sidebar/SidebarContainer";
import Preview from "./main/Preview";
import "./styles/RightPanel.css";
import "./styles/LeftPanel.css";

function ContentContainer() {
  return (
    <>
      <AddItemProvider>
        <InvoiceProvider>
          <TheirInfoProvider>
            <YourInfoProvider>
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-screen max-w-screen min-w-screen rounded-lg bg-gray-600"
              >
                {/*LEFT PANEL */}
                <ResizablePanel defaultSize={34} maxSize={66}>
                  <div className="flex flex-h-full p-6">
                    <SidebarContainer />
                  </div>
                </ResizablePanel>
                {/*RIGHT PANEL*/}
                <ResizableHandle withHandle />
                <ResizablePanel
                  defaultSize={66}
                  maxSize={80}
                  className="bg-gray-300"
                >
                  <AspectRatioContainer>
                    <Preview />
                  </AspectRatioContainer>
                </ResizablePanel>
              </ResizablePanelGroup>
            </YourInfoProvider>
          </TheirInfoProvider>
        </InvoiceProvider>
      </AddItemProvider>
    </>
  );
}

export {
  ContentContainer,
  useYourInfoContext,
  useTheirInfoContext,
  useAddItemContext,
};
