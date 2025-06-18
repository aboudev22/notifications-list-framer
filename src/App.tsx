import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [notifs, setNotifs] = useState<{ id: number }[]>([]);
  const addNotifs = () => {
    setNotifs((prev) => [...prev, { id: Date.now() }]);
  };
  const handleDeleted = (id: number) => {
    setNotifs((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="w-screen h-screen bg-transparent flex justify-center items-end p-5 overflow-hidden">
      <button
        onClick={addNotifs}
        className="bg-blue-500 rounded-md text-xs p-2 cursor-pointer active:scale-95"
      >
        Add notifications
      </button>
      <main className="w-sm flex flex-col gap-2 items-center">
        <AnimatePresence mode="popLayout">
          {notifs.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20, scale: 1.2 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              key={item.id}
              className="w-56 p-2 flex justify-between bg-blue-900 rounded-md"
            >
              <div className="flex flex-col gap-2">
                <div className="w-32 rounded-md h-6 bg-blue-500" />
                <div className="w-16 rounded-md h-3 bg-blue-500/40" />
              </div>
              <X
                onClick={() => handleDeleted(item.id)}
                className="text-black w-3 cursor-pointer"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </div>
  );
}
