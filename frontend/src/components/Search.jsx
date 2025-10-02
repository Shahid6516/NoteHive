import { useState } from "react";

function Search() {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleAdd = () => {
    console.log({ title, note });
    setTitle("");
    setNote("");
    setExpanded(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-white p-2 rounded-lg w-[400px] drop-shadow-md drop-shadow-zinc-500 transition-all duration-300">
        
        {expanded && (
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-10 mb-2 p-2 rounded-lg outline-none text-xl font-semibold"
          />
        )}

        <input
          type="text"
          placeholder="Add your notes..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full h-10 p-3 rounded-lg outline-none text-lg"
          onClick={() => setExpanded(true)}
        />

        {expanded && (
          <div className="flex justify-end mt-2">
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
