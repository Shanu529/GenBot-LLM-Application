

interface SidebarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:relative top-0 left-0 z-40
          h-full w-72
          bg-black
          border-r border-white/10
          p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">GenBot</h2>

          {/* Close button only mobile */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-lg hover:text-gray-400 transition"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          <div className="bg-[#191E2E] p-3 rounded-xl hover:bg-white/20 transition cursor-pointer">
            Exploring AI
          </div>

          <div className="bg-[#191E2E] p-3 rounded-xl hover:bg-white/20 transition cursor-pointer">
            Cooking Assistant
          </div>
        </div>
      </div>
    </>
  );
}
