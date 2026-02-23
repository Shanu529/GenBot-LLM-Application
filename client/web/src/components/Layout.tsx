import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen text-white relative">

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <ChatArea
        setOpen={setSidebarOpen}
      />

    </div>
  );
}