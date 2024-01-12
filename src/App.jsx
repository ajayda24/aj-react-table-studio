import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
  return (
    <>
      <div>
        <div className="w-full p-5 bg-red-950 flex justify-between items-center text-white">
          <h1>React Table Studio</h1>
          <h3>Github Icon</h3>
        </div>
        <div className="min-h-screen w-full flex gap-2 bg-slate-200 p-5 relative ">
          {/* <button className="bg-blue-950 p-2 rounded-md text-white border-r-2 border-y-2 border-spacing-2 border-red-950 absolute right-1/2 top-1/2">
            Design with API
          </button> */}
          <PanelGroup direction="horizontal">
            <Panel defaultSize={30} minSize={20}>
              left
            </Panel>
            <PanelResizeHandle />
            <Panel minSize={30}>middle</Panel>
            <PanelResizeHandle />
            <Panel defaultSize={30} minSize={20}>
              right
            </Panel>
          </PanelGroup>
          ;
        </div>
      </div>
    </>
  );
}

export default App;
