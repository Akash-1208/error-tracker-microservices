import React from "react";
import {
  Dialog, DialogTitle, DialogContent,
  Typography, IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ErrorDetailsModal({ open, onClose, error }) {
  if (!error) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {error.exceptionClass} — {error.message}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography variant="subtitle1"><b>Service:</b> {error.serviceName}</Typography>
        <Typography variant="subtitle1"><b>Class:</b> {error.className}</Typography>
        <Typography variant="subtitle1"><b>Method:</b> {error.methodName}</Typography>

        <Typography variant="subtitle1" sx={{ mt: 2 }}><b>Stack Trace:</b></Typography>
        <pre
          style={{
            background: "#f8f9fa",
            padding: "10px",
            borderRadius: "6px",
            overflowX: "auto",
            fontSize: "13px"
          }}
        >
          {error.stackTrace}
        </pre>
      </DialogContent>
    </Dialog>
  );
}
