import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { addLog } from "../store/logSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddLogForm = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const handleAddLog = () => {
    const timestamp = new Date().toLocaleString();
    const id = nanoid();
    dispatch(addLog({ id, message, type, timestamp }));
    setMessage("");
    setType("");
  };

  return (
    <div>
      <TextField label="Message" variant="outlined" value={message} onChange={(e) => setMessage(e.target.value)} />
      <TextField label="Type" variant="outlined" value={type} onChange={(e) => setType(e.target.value)} />
      <Button variant="contained" onClick={handleAddLog}>
        Add Log
      </Button>
    </div>
  );
};

export default AddLogForm;
