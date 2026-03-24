import "../App.css";
import { useState } from "react";
import { directoryData } from "../data/directoryData";
import { motion, AnimatePresence } from "framer-motion";

const Grid = ({search = ""}) => {
  const [selected, setSelected] = useState("Websites");

  const buttonsText = ["Websites", "Meetups", "Mentors"];
  const filterDesc = {
    Websites:
      "Useful online platforms for women and girls.They offer coding, mentoring and networking opportunites.",
    Meetups: "Community organisations that host in-person and virtual meetups.",
    Mentors: "Coming soon.",
  };

 const filteredData = directoryData.filter((item) => {
  const matchesType = item.type === selected;

  const matchesSearch =
    search.trim() === "" ||
    item.name.toLowerCase().includes(search.toLowerCase());

  return matchesType && matchesSearch;
});

  return (
    <main className="flex justify-center min-w-sm">
      <section className="-mt-32 pt-12 w-full max-w-5xl px-4">
        <div className="pl-2">
          <h1 className="pb-2 text-sm text-gray-600">Featured</h1>

          <div className="flex gap-2 mb-5 text-sm">
            {buttonsText.map((button) => (
              <button
                key={button}
                onClick={() => setSelected(button)}
                className={`px-3 py-1.5 border rounded-xl transition duration-150
                  ${
                    selected === button
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                  }transition duration-250`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500">{filterDesc[selected]}</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6
    transition-opacity duration-200"
          >
            {filteredData.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-200"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h2>

                  {item.description && (
                    <p className="text-sm text-gray-500">{item.description}</p>
                  )}

                  <span className="inline-block text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                    {item.type}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Grid;
