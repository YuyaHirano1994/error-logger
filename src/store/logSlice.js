import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "logs",
  initialState: [],
  reducers: {
    addLog: (state, action) => {
      const { id, message, type, timestamp } = action.payload;
      state.push({ id, message, type, timestamp });
    },
    editLog: (state, action) => {
      const { id, message, type, timestamp } = action.payload;
      const logToEdit = state.find((log) => log.id === id);
      if (logToEdit) {
        logToEdit.message = message;
        logToEdit.type = type;
        logToEdit.timestamp = timestamp;
      }
    },
    deleteLog: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      return state.filter((log) => log.id !== id);
    },
  },
});

export const { addLog, editLog, deleteLog } = logSlice.actions;

export default logSlice.reducer;
