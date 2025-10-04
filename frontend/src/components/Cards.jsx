// src/components/Cards.jsx
import axios from "axios";

function Cards({ notes, onRefresh }) {
  // Delete note
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/note/${id}`);
      onRefresh(); // refresh notes after deletion
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit note (prompt version for simplicity)
  const handleEdit = async (id, currentTitle, currentDesc) => {
    const newTitle = prompt("Edit title", currentTitle) || currentTitle;
    const newDesc = prompt("Edit description", currentDesc) || currentDesc;

    try {
      await axios.put(`http://localhost:3000/api/v1/note/${id}`, {
        title: newTitle,
        description: newDesc,
      });
      onRefresh(); // refresh notes after editing
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  if (!notes || notes.length === 0) {
    return <p className="text-gray-500 text-center">No notes yet</p>;
  }

  return (
    <div className="px-30   flex  items-center gap-4 flex-wrap justify-center">
      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white p-5 w-70   rounded-lg shadow-sm relative"
        >
          {note.title && <h2 className="font-semibold text-lg">{note.title}</h2>}
          <p className="text-gray-700">{note.description}</p>

          {/* Buttons */}
          <div className="absolute top-2 right-2 space-x-2">
            <button
              onClick={() => handleEdit(note._id, note.title, note.description)}
              className="px-2 mt-10 py-1 text-sm bg-blue-400 text-white rounded hover:bg-blue-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(note._id)}
              className="px-2 py-1 text-sm bg-red-400 text-white rounded hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
