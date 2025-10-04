import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

function Addnotes() {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/note");
      console.log("Fetched notes:", response.data.notes); // check data
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleAdd = async () => {
    if (!note.trim()) return;

    try {
      await axios.post(
        "http://localhost:3000/api/v1/note/create",
        { title, description: note },
        { headers: { "Content-Type": "application/json" } }
      );

      setTitle("");
      setNote("");
      setExpanded(false);

      fetchNotes(); // refresh notes
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-white p-2 rounded-lg w-[400px] drop-shadow-md transition-all duration-300">
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

      {/* Render all notes using Cards component */}
      <div className="mt-6 w-full px-30 flex">
        <Cards notes={notes} onRefresh={fetchNotes} />

      </div>
    </div>
  );
}

export default Addnotes;
