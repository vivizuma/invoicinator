import {
  useYourInfoContext,
  YourInfoProvider,
} from "@/contexts/YourInfoContext";
import {
  TheirInfoProvider,
  useTheirInfoContext,
} from "@/contexts/TheirInfoContext";
import { InvoiceProvider, useInvoiceContext } from "@/contexts/InvoiceContext";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AspectRatioContainer from "./main/AspectRatioContainer";

import SidebarContainer from "./sidebar/SidebarContainer";
import Preview from "./main/Preview";

function ContentContainer() {
  return (
    <>
      <InvoiceProvider>
        <TheirInfoProvider>
          <YourInfoProvider>
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
          </YourInfoProvider>
        </TheirInfoProvider>
      </InvoiceProvider>
    </>
  );
}

export { ContentContainer, useYourInfoContext, useTheirInfoContext };
