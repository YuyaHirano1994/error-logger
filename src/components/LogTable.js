import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditLogModal from "./EditLogModal";
import { deleteLog, editLog } from "../store/logSlice";

const LogTable = () => {
  const logs = useSelector((state) => state.logs);
  const dispatch = useDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);

  useEffect(() => {
    console.log("log changed");
  }, logs);

  const handleEditOpen = (log) => {
    setSelectedLog(log || {});
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setSelectedLog(null);
    setEditOpen(false);
  };

  const handleEdit = (editedLog) => {
    dispatch(editLog({ ...editedLog }));
    handleEditClose();
  };

  const handleDelete = (logId) => {
    dispatch(deleteLog({ id: logId }));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Error Code</TableCell>
              <TableCell>Error Message</TableCell>
              <TableCell>How to solve</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.type}</TableCell>
                <TableCell>{log.code}</TableCell>
                <TableCell>{log.message}</TableCell>
                <TableCell>{log.solve}</TableCell>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditOpen(log)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(log.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditLogModal open={editOpen} onClose={handleEditClose} log={selectedLog} onEdit={handleEdit} />
    </>
  );
};

export default LogTable;
