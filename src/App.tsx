import { useState } from "react";
import HomePage from "./pages/Home.page";
import { NoteContext } from "./contexts/note.context";
import { initialNote, NostrNote } from "./shared/constants";

function App() {
  const [ note, setNote ] = useState<NostrNote>(initialNote);

  return (
    <NoteContext.Provider value={{
      note,
      setNote,
    }}>
      <HomePage />
    </NoteContext.Provider>
  );
}

export default App
