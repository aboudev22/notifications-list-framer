import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [notis, setNotifs] = useState<{ id: number }[]>([]);
  const addNotifs = () => {
    setNotifs((prev) => [...prev, { id: Date.now() }]);
  };
  const handleDeleted = (id: number) => {
    setNotifs((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="w-screen h-screen bg-transparent flex justify-center items-end p-5">
      <button
        onClick={addNotifs}
        className="p-2 text-white bg-blue-500 rounded-md active:scale-95 transition-all cursor-pointer"
      >
        Add Notifications
      </button>
      <main className="h-full w-sm flex flex-col justify-end items-center gap-2">
        <AnimatePresence mode="popLayout">
          {notis.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ scale: 1.2, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              className="w-48 p-2 flex justify-between bg-blue-500 rounded-md"
            >
              <div className="p-2 flex flex-col gap-2">
                <div className="w-28 h-5 rounded-md bg-blue-300" />
                <div className="w-20 h-2 rounded-md bg-blue-300/50" />
              </div>
              <X
                className="text-black w-3 cursor-pointer"
                onClick={() => handleDeleted(item.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </div>
  );
}
