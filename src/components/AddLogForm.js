import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { addLog } from "../store/logSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddLogForm = () => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [solve, setSolve] = useState("");
  const dispatch = useDispatch();

  const handleAddLog = () => {
    const timestamp = new Date().toLocaleString();
    const id = nanoid();
    dispatch(addLog({ id, type, code, message, solve, timestamp }));
    setCode("");
    setSolve("");
    setMessage("");
    setType("");
  };

  return (
    <Box component="div" sx={{ marginTop: "20px" }}>
      <TextField label="Type" variant="outlined" value={type} onChange={(e) => setType(e.target.value)} />
      <TextField label="Code" variant="outlined" value={code} onChange={(e) => setCode(e.target.value)} />
      <TextField label="Message" variant="outlined" value={message} onChange={(e) => setMessage(e.target.value)} />
      <TextField label="How to solve" variant="outlined" value={solve} onChange={(e) => setSolve(e.target.value)} />
      <Button variant="contained" onClick={handleAddLog}>
        Add Log
      </Button>
    </Box>
  );
};

export default AddLogForm;
