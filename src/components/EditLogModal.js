import { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

const EditLogModal = ({ open, onClose, log, onEdit }) => {
  const [editedLog, setEditedLog] = useState(log || { id: "", type: "", message: "", timestamp: "" });

  useEffect(() => {
    setEditedLog(log);
  }, [log]);

  const handleEdit = () => {
    onEdit(editedLog);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedLog({ ...editedLog, [name]: value });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Log</DialogTitle>
      <DialogContent>
        {log && (
          <form style={{ marginTop: "20px" }}>
            <TextField
              fullWidth
              label="Type"
              name="type"
              value={editedLog?.type}
              onChange={handleInputChange}
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              fullWidth
              label="Error Code"
              name="code"
              value={editedLog?.code}
              onChange={handleInputChange}
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={editedLog?.message}
              onChange={handleInputChange}
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              fullWidth
              label="How to solve"
              name="solve"
              value={editedLog?.code}
              onChange={handleInputChange}
              sx={{ marginBottom: "10px" }}
            />

            <TextField
              fullWidth
              label="Timestamp"
              name="timestamp"
              value={editedLog?.timestamp}
              onChange={handleInputChange}
            />
          </form>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleEdit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditLogModal;
