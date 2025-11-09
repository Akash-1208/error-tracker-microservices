import React from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from "@mui/material";

export default function ErrorTable({ errors, onRowClick }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 2, borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "#fff" }}>Service</TableCell>
            <TableCell sx={{ color: "#fff" }}>Class</TableCell>
            <TableCell sx={{ color: "#fff" }}>Method</TableCell>
            <TableCell sx={{ color: "#fff" }}>Exception</TableCell>
            <TableCell sx={{ color: "#fff" }}>Message</TableCell>
            <TableCell sx={{ color: "#fff" }}>Time</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {errors.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No errors found
              </TableCell>
            </TableRow>
          ) : (
            errors.map((err) => (
              <TableRow
                key={err.id}
                hover
                sx={{ cursor: "pointer" }}
                onClick={() => onRowClick(err)}
              >
                <TableCell>{err.serviceName}</TableCell>
                <TableCell>{err.className}</TableCell>
                <TableCell>{err.methodName}</TableCell>
                <TableCell>{err.exceptionClass}</TableCell>
                <TableCell>{err.message}</TableCell>
                <TableCell>
                  {new Date(err.timestamp).toLocaleString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
