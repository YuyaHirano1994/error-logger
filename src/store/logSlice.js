import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "logs",
  initialState: [
    {
      id: "sample",
      type: "Error",
      code: "TS404",
      message: "This is Error Message",
      solve: "I reviewed the spelling.",
      timestamp: new Date().toLocaleString(),
    },
  ],
  reducers: {
    addLog: (state, action) => {
      const { id, type, code, message, solve, timestamp } = action.payload;
      state.push({ id, type, code, message, solve, timestamp });
    },
    editLog: (state, action) => {
      const { id, type, code, message, solve, timestamp } = action.payload;
      const logToEdit = state.find((log) => log.id === id);
      if (logToEdit) {
        logToEdit.type = type;
        logToEdit.code = code;
        logToEdit.message = message;
        logToEdit.solve = solve;
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
