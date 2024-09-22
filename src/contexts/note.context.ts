import { createContext, useContext } from "react";
import { initialNote, NostrNote } from "../shared/constants";

const setNote = (note: NostrNote) => {}

export const NoteContext = createContext({
    note: initialNote,
    setNote,
});

export function useNoteContext() {
  return useContext(NoteContext);
}